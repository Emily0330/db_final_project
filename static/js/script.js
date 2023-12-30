<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Novel List</title>
    <!-- 引入 Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css">
    <!-- 引入自定义 CSS -->
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>
    <div class="container">
        <h1 class="my-4">Novels</h1>
        
        <p class="alert alert-info">小說設定</p>

        <!-- 篩選功能 -->
        <form action="/submit-form" method="post">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="selectAllOptions">
                <label class="form-check-label" for="selectAllOptions">全選</label>
            </div>        
            <div class="row">
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option1">
                        <label class="form-check-label" for="option1">哨向</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option2">
                        <label class="form-check-label" for="option2">高智商</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option3">
                        <label class="form-check-label" for="option3">職場</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option4">
                        <label class="form-check-label" for="option4">BE</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option5">
                        <label class="form-check-label" for="option5">論壇體</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option6">
                        <label class="form-check-label" for="option6">性別轉換</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option7">
                        <label class="form-check-label" for="option7">虐文</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option8">
                        <label class="form-check-label" for="option8">替身</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option9">
                        <label class="form-check-label" for="option9">近代現代</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option10">
                        <label class="form-check-label" for="option10">古色古香</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option11">
                        <label class="form-check-label" for="option11">架空歷史</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option12">
                        <label class="form-check-label" for="option12">幻想未來</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option13">
                        <label class="form-check-label" for="option13">愛情</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option14">
                        <label class="form-check-label" for="option14">武俠</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option15">
                        <label class="form-check-label" for="option15">奇幻</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option16">
                        <label class="form-check-label" for="option16">仙俠</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option17">
                        <label class="form-check-label" for="option17">遊戲</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option18">
                        <label class="form-check-label" for="option18">科幻</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option19">
                        <label class="form-check-label" for="option19">甜文</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option20">
                        <label class="form-check-label" for="option20">爽文</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option21">
                        <label class="form-check-label" for="option21">情有獨鍾</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option22">
                        <label class="form-check-label" for="option22">穿越時空</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option23">
                        <label class="form-check-label" for="option23">穿書</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option24">
                        <label class="form-check-label" for="option24">豪門世家</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option25">
                        <label class="form-check-label" for="option25">強強</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option26">
                        <label class="form-check-label" for="option26">系統</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option27">
                        <label class="form-check-label" for="option27">重生</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option28">
                        <label class="form-check-label" for="option28">娛樂圈</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option29">
                        <label class="form-check-label" for="option29">都市</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option30">
                        <label class="form-check-label" for="option30">破鏡重圓</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option31">
                        <label class="form-check-label" for="option31">先婚後愛</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option32">
                        <label class="form-check-label" for="option32">逆襲</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option33">
                        <label class="form-check-label" for="option33">日常</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option34">
                        <label class="form-check-label" for="option34">校園</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option35">
                        <label class="form-check-label" for="option35">ABO</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option36">
                        <label class="form-check-label" for="option36">年下</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option37">
                        <label class="form-check-label" for="option37">追愛火葬場</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option38">
                        <label class="form-check-label" for="option38">末世</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option39">
                        <label class="form-check-label" for="option39">群像</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option40">
                        <label class="form-check-label" for="option40">驚悚</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option41">
                        <label class="form-check-label" for="option41">懸疑</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option42">
                        <label class="form-check-label" for="option42">劇情</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option43">
                        <label class="form-check-label" for="option43">輕小說</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option44">
                        <label class="form-check-label" for="option44">正劇</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option45">
                        <label class="form-check-label" for="option45">HE</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option46">
                        <label class="form-check-label" for="option46">現代架空</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option47">
                        <label class="form-check-label" for="option47">救贖</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option48">
                        <label class="form-check-label" for="option48">青梅竹馬</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option49">
                        <label class="form-check-label" for="option49">暗戀</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option50">
                        <label class="form-check-label" for="option50">治癒</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="option51">
                        <label class="form-check-label" for="option51">宮鬥</label>
                    </div>
                </div>
            </div>

            <p class="alert alert-info">字數上限</p>

            <!-- 拉霸 -->
            <div class="row my-3">
                <div class="col">
                    <label for="rangeFilter" class="form-label">篩選範圍（上限）:</label>
                    <input type="range" class="form-range" id="rangeFilter" min="0" max="20000000" value="0">
                    <span id="rangeValue">0</span>
                </div>
            </div>

            <p class="alert alert-info">性向</p>

            <!-- 性向 -->
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="selectAllSexual">
                <label class="form-check-label" for="selectAllSexual">全選</label>
            </div>        
            <div class="row">
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="sexual1">
                        <label class="form-check-label" for="sexual1">言情</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="sexual2">
                        <label class="form-check-label" for="sexual2">純愛</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="sexual3">
                        <label class="form-check-label" for="sexual3">百合</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="sexual4">
                        <label class="form-check-label" for="sexual4">女尊</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="sexual5">
                        <label class="form-check-label" for="sexual5">無cp</label>
                    </div>
                </div>
            </div>

            <p class="alert alert-info">小說狀態</p>

            <!-- 完結 -->
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="selectAllend">
                <label class="form-check-label" for="selectAllend">全選</label>
            </div>        
            <div class="row">
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="end1">
                        <label class="form-check-label" for="end1">完結</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="end2">
                        <label class="form-check-label" for="end2">連載</label>
                    </div>
                </div>
            </div>

            <!-- 確認按鍵 -->
            <div class="row my-3">
                <div class="col">
                    <button type="submit" class="btn btn-primary">篩選</button>
                </div>
            </div>
        </form>
        <!-- 小說列表 -->
        <ul class="list-group">
            {% for item in items %}
                <li class="list-group-item">{{ item.name }} - Code: {{ item.code }}</li>
            {% else %}
                <li class="list-group-item">No novels found.</li>
            {% endfor %}
        </ul>
        <!-- 引用 static/images 目錄下的圖片 -->
        <img src="{{ url_for('static', filename='images/yjt_monk.jpg') }}" alt="Monkey Image" class="img-fluid my-3">
    </div>

    <!-- 引入 Bootstrap JavaScript 和依賴項 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.bundle.min.js"></script>
    <!-- 引入自定义 JavaScript -->
    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
</body>
</html>
