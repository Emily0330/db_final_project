document.addEventListener('DOMContentLoaded', function() {
    // 绑定滑动条的 input 事件
    const rangeFilter = document.getElementById('rangeFilter');
    
    rangeFilter.oninput = function() {
        rangeValueDisplay.textContent = this.value;
    };

    const selectAllCheckbox1 = document.getElementById('selectAllOptions');
    const selectAllCheckbox2 = document.getElementById('selectAllSexual');
    const selectAllCheckbox3 = document.getElementById('selectAllend');
    const checkboxes = document.querySelectorAll('.form-check-input');

    selectAllCheckbox1.addEventListener('change', function() {
        checkboxes.forEach(function(checkbox) {
            // 只改变与选项相关的复选框
            if (checkbox.id.startsWith('option')) {
                checkbox.checked = selectAllCheckbox1.checked;
            }
        });
    });
    selectAllCheckbox2.addEventListener('change', function() {
        checkboxes.forEach(function(checkbox) {
            // 只改变与选项相关的复选框
            if (checkbox.id.startsWith('sexual')) {
                checkbox.checked = selectAllCheckbox2.checked;
            }
        });
    });
    selectAllCheckbox3.addEventListener('change', function() {
        checkboxes.forEach(function(checkbox) {
            // 只改变与选项相关的复选框
            if (checkbox.id.startsWith('end')) {
                checkbox.checked = selectAllCheckbox3.checked;
            }
        });
    });

    // 绑定按钮点击事件到 applyFilters 函数
    const filterButton = document.querySelector('.btn.btn-primary');
    if (filterButton) {
        filterButton.addEventListener('click', applyFilters);
    }

    const rangeSlider = document.getElementById('rangeFilter');
    const rangeValueDisplay = document.getElementById('rangeValue');
    const hiddenRangeValue = document.getElementById('hiddenRangeValue');

    // 設定滑塊和隱藏輸入的初始值
    rangeValueDisplay.textContent = rangeSlider.value;
    hiddenRangeValue.value = rangeSlider.value;

    // 更新顯示值和隱藏輸入的值
    rangeSlider.addEventListener('input', function() {
        rangeValueDisplay.textContent = this.value;
        hiddenRangeValue.value = this.value;
    });
});

// 应用筛选函数
function applyFilters() {
    console.log('applyFilters function called');
    const rangeFilter = document.getElementById('rangeFilter');
    const rangeValue = rangeFilter ? rangeFilter.value : null;
    let selectedOptions = [];
    let selectedSexual = [];
    let selectedend = [];

    // 循环检查所有 51 个选项
    for (let i = 1; i < 52; i++) {
        let checkbox = document.getElementById('option' + i);
        if (checkbox && checkbox.checked) {
            selectedOptions.push(i);
        }
    }
    for (let i = 1; i < 6; i++) {
        let checkbox = document.getElementById('sexual' + i);
        if (checkbox && checkbox.checked) {
            selectedSexual.push(i);
        }
    }
    for (let i = 1; i < 4; i++) {
        let checkbox = document.getElementById('end' + i);
        if (checkbox && checkbox.checked) {
            selectedend.push(i);
        }
    }

    console.log('选中的設定：', selectedOptions);
    console.log('滑动条的值：', rangeValue);
    console.log('选中的性向：', selectedSexual);
    console.log('选中的狀態：', selectedend);
    // 在这里执行您的筛选逻辑
    // 您可以根据选中的选项和滑动条的值从后端请求数据，或者在页面上显示/隐藏某些元素
    // 在这里添加更多代码以处理筛选逻辑
}

document.getElementById('myForm').addEventListener('submit', function(e) {
    var checkboxes = document.querySelectorAll('.form-check-input');
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (!checkedOne) {
        e.preventDefault(); // 阻止表单提交
        document.getElementById('warning').style.display = 'block'; // 显示警告信息
    }
});

document.getElementById('rangeFilter').addEventListener('input', function(e) {
        document.getElementById('rangeValue').textContent = e.target.value;
        document.getElementById('hiddenRangeValue').value = e.target.value;
});
