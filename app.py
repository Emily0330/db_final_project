from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# 使用环境变量配置数据库连接
app.config['SQLALCHEMY_DATABASE_URI'] = (
    # 'DBtype://username:password@host:port/dbname'
    'postgresql://qomolanma:postgre2023@oxcgrt.cp6zhfatigjz.us-east-1.rds.amazonaws.com:5432/oxcgrt' # has to change to the real db
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# 定义模型

class Novel(db.Model):
    __tablename__ = 'continent' # READ THE TABLE NAME
    code = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    # author = db.Column(db.String, nullable=False)

# 设置路由
@app.route('/')

def index():
    # 示例：从数据库获取数据
    # will change
    items = Novel.query.limit(10).all()
    return render_template('index.html', items=items)

if __name__ == '__main__':
    app.run(debug=True)
