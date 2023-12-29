# db_final_project
The code of final project of 2023 Fall Introduction to Database System (Prof: Yi Ju Tseng)

### Info
* Framework: Flask
To get started, type the following in your terminal:

`pip install Flask`

* (will be) Deployed on AWS EC2 

* Cloud Database Service: AWS RDS

### File Explanation
* **app.py (backend)**: for connecting db (and probably deploy information)
* **templates (holder for html files)**:
  * **index.html (frontend)**: for the home webpage 
* **static**
  * **css (holder for css files)**
    * **style.css**: for index.html (?)
  * **images (holder for images)**
* **requirements.txt**: specifies the packages you need to install

### To run the file (before we deploy, if you want to see the webpage)

1. clone the repo
2. install the packages specified in requirements.txt
3. run in the terminal: `python app.py`
4. (if we haven't deployed on EC2) go to [http://127.0.0.1:5000](http://127.0.0.1:5000) and you'll see the webpage

