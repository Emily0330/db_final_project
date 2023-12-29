import requests
from bs4 import BeautifulSoup
import csv
from opencc import OpenCC

def convert_to_traditional_chinese(text):
    # 初始化 OpenCC 轉換器（簡體到繁體）
    cc = OpenCC('s2twp')
    return cc.convert(text)

def crawl_specific_table_from_url(url, table_class):
    # 發送 HTTP GET 請求
    response = requests.get(url)

    # 檢查響應是否成功
    if response.status_code == 200:
        # 設定正確的響應編碼
        response.encoding = 'gb18030'

        # 使用 BeautifulSoup 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 找到具有指定 class 的表格
        table = soup.find('table', {'class': table_class})

        # 如果找到表格
        if table:
            # 打開 CSV 檔案以寫入模式，使用 UTF-8 編碼
            with open("data_type.csv", 'a', newline='', encoding='utf-8') as csvfile:
                csvwriter = csv.writer(csvfile)

                # 遍歷表格的每一行
                for row in table.find_all('tr'):
                    # 遍歷每一列
                    columns = row.find_all(['th', 'td'])
                    data = [convert_to_traditional_chinese(column.text.strip()) for column in columns]

                    # 查找是否有包含 URL 的列
                    if row.find('a', title=True):
                      url_columns = row.find_all('a', href=True, title=True)
                      titles = [convert_to_traditional_chinese(title['title']) for title in url_columns]

                      # 將 URL 加入到資料中
                      data.extend(titles)

                    if row.find('a', href=True):
                      url_columns = row.find_all('a', href=True)
                      urls = [convert_to_traditional_chinese(url['href']) for url in url_columns]

                      # 將 URL 加入到資料中
                      data.extend(urls)

                    # 寫入資料到 CSV 檔案
                    csvwriter.writerow(data)
        else:
            print(f"沒有找到具有 class '{table_class}' 的表格")
    else:
        print("請求失敗，狀態碼：", response.status_code)

# 你的目標網頁的 URL
target_url = "your_url"

# 指定要抓取的表格的 class
table_class_to_crawl = "cytable"

# 呼叫函數開始爬蟲
# 使用 for 迴圈處理每個連結
for index in range(1,11):
    crawl_specific_table_from_url(target_url+str(index), table_class_to_crawl)
