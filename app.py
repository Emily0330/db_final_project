from flask import Flask, render_template, request, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from flask_paginate import Pagination, get_page_args
import os

app = Flask(__name__)

# 生成隨機的秘密金鑰
app.secret_key = os.urandom(24)

# 使用环境变量配置数据库连接
app.config['SQLALCHEMY_DATABASE_URI'] = (
    # 'DBtype://username:password@host:port/dbname'
    'postgresql://postgres:postgres@novel-new.cp6zhfatigjz.us-east-1.rds.amazonaws.com:5432/novel' # has to change to the real db
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    # 勾选框名称与数据库表名的映射
    table_mapping = {
        'option1': 'sentinel','option2': 'smart','option3': 'workplace',
        'option4': 'BE','option5': 'forum','option6': 'transgender',
        'option7': 'tormenting','option8': 'substitute','option9': 'modern',
        'option10': 'antiquity','option11': 'alternate_history','option12': 'fantasy_future',
        'option13': 'love','option14': 'material_arts','option15': 'fantasy',
        'option16': 'cultivation','option17': 'game','option18': 'science_fiction',
        'option19': 'sweet','option20': 'smoothly','option21': 'one_v_one',
        'option22': 'travel_through_time','option23': 'into_book','option24': 'rich_family',
        'option25': 'strong_strong','option26': 'system','option27': 'reborn',
        'option28': 'entertainment','option29': 'city','option30': 'reunion',
        'option31': 'marry_first_love_later','option32': 'counterattack','option33': 'daily',
        'option34': 'school','option35': 'ABO','option36': 'younger',
        'option37': 'relentless_pursuit_lost_love','option38': 'ruined_future','option39': 'group_portrait',
        'option40': 'thriller','option41': 'suspense','option42': 'plot',
        'option43': 'light_novel','option44': 'serious','option45': 'HE',
        'option46': 'alternate_modern','option47': 'redemption','option48': 'childhood_sweethearts',
        'option49': 'secret_love','option50': 'healing','option51': 'palace'
    }
    table_mapping_sexual = { 'sexual1': '言情', 'sexual2':'純愛', 'sexual3':'百合', 'sexual4':'女尊', 'sexual5':'無CP' }
    table_mapping_status = { 'end1': '完結', 'end2':'連載', 'end3':'暫停' }
    # 初始化表單值的字典
    default_form_values = {
        'range_value': '0',
        **{key: '' for key in table_mapping},
        **{key: '' for key in table_mapping_sexual},
        **{key: '' for key in table_mapping_status},
    }
    form_values = default_form_values.copy()
    rows= []
    query= ""
    where= ""
    if request.method == 'POST':
        # 更新字典中各表單元素的值
        form_values['range_value'] = request.form.get('rangeFilter', '0')
        form_values.update({key: 'checked' if key in request.form else form_values[key] for key in default_form_values})
        
        rows= []
        query= ""
        where= ""
        find= False # 重置
        have_where= False # have where in query

        for checkbox, sexual in table_mapping_sexual.items():
            if checkbox in request.form:
                if not find:
                    have_where= True
                    where += f" WHERE (\"type\" LIKE '%{sexual}%'"
                    find= True
                else:
                    where += f" OR \"type\" LIKE '%{sexual}%'"
        if find:
            where += ")"
        
        find= False # 重置
        for checkbox, status in table_mapping_status.items():
            if checkbox in request.form:
                if not find:
                    if have_where:
                        where += f" AND (\"end\" = '{status}'"
                        find= True
                    else:
                        where += f" WHERE (\"end\" = '{status}'"
                        find= True
                        have_where= True
                else:
                    where += f" OR \"end\" = '{status}'"
        if find:
            where += ")"

        range_value = request.form.get('rangeValue')
        if have_where:
            where+= f" AND (word <= {range_value})"
        else:
            where+= f" WHERE (word <= {range_value})"
        
        # 为选中的每个表构建 SQL 查询并用 UNION 连接
        find= False
        for checkbox, table in table_mapping.items():
            if checkbox in request.form:
                if find:
                    query += " UNION "
                else:
                    find= True
                query += f"SELECT book.* FROM {table} JOIN book ON {table}.bookweb = book.bookweb"
                query += where

        if not query: # 没有勾选任何表时执行默认查询
            query = " SELECT * FROM book "
            query += where
        
        query += " ORDER BY point desc "
        
        with db.engine.connect() as connection:
            result = connection.execute(text(query))
            rows = result.fetchall()

        session['query'] = query  # 保存查询字符串到会话
        session['total_rows'] = len(rows)  # 保存总行数到会话
        session['form_values'] = form_values
    else:
        # 处理 GET 请求
        query = session.get('query', '')  # 从会话中获取查询字符串
        total_rows = session.get('total_rows', 0)  # 从会话中获取总行数
        form_values = session.get('form_values', default_form_values)

        if query:
            with db.engine.connect() as connection:
                result = connection.execute(text(query))
                rows = result.fetchall()

    # 分頁相關配置
    page, per_page, offset = get_page_args()
    per_page = 50  # 每頁顯示的行數
    current_page = page if page else 1

    # 分頁對象
    pagination = Pagination(page=page, per_page=per_page, total=len(rows), css_framework='bootstrap5')

    # 分頁後的結果
    paginated_results = rows[offset: offset + per_page]

    session['current_page'] = current_page

    return render_template('index.html', results=paginated_results, pagination=pagination, form_values=form_values)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
