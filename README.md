# 找Novel?
The code of final project of 2023 Fall Introduction to Database System (Prof: Yi Ju Tseng)

Group members: [@hanyu2003](https://github.com/hanyu2003)、[@yuuunz](https://github.com/yuuunz)、[@fangci](https://github.com/fangci)、[@moonymercury](https://github.com/moonymercury)、[@emily0330](https://github.com/emily0330)

If you are interested, please check [our YouTube video](https://youtu.be/w8ScicBCDIM) to know more about the project!
### Info
* Framework: Flask
To get started, type the following in your terminal:

`pip install Flask` (you may have to install other packages specified in requirements.txt)

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
* **requirements.txt**: specifies the packages you need to install, please install all of them!

### To run the file (before we deploy, if you want to see the webpage)

1. clone the repo
2. install the packages specified in requirements.txt
3. run in the terminal: `python app.py`
4. (if we haven't deployed on EC2) go to [http://127.0.0.1:5000](http://127.0.0.1:5000) and you'll see the webpage

### Our database is closed!
You can build up your own db and set the connection in the same way as what we did in app.py

