;
(function() {
    'use strict'
    //表格所需数据（后台获取，此处测试）
    let userList = [{
            username: 'lsd',
            email: 'lsd@dd.com',
            iq: 120,
        },
        {
            username: 'whh',
            email: 'whh@dd.com',
            iq: 130,
        },
    ];
    //选中表单类
    let form = document.querySelector('form');
    // 选中表单类下输入框
    let inputs = form.querySelectorAll('input');
    // 选中表格类
    let table = document.querySelector('table');
    // 选中表格内容
    let tbody = table.querySelector('tbody');
    // 更新标识
    let isUpdate = false;
    //更新数据下标
    let updateIndex;
    /*****一切的开始****** */
    init();

    function init() {
        render();
        bandSubmit();
    };
    // 绑定提交事件
    function bandSubmit() {
        form.addEventListener('submit', e => {
            e.preventDefault();
            let data = {};
            inputs.forEach(input => {
                data[input.name] = input.value;
            })
            if (!isUpdate)
                userList.push(data);
            else
                userList[updateIndex] = data;
            render();
            form.reset();
        })
    };
    //表格数据渲染
    function render() {
        // 每次表格数据调用前想想表内容清空，防止反复添加表数据
        tbody.innerHTML = ``;
        //循环表格数据
        userList.forEach((user, index) => {
            // 如果userList没有数据（数据都被删除）直接返回，不在增加视图
            if (!user) {
                return
            }
            //创建表格单元行元素
            let tr = document.createElement('tr');
            tr.innerHTML = ``;
            for (let i in user) {
                //将表格数据放入单元格中，再追加到单元行中
                tr.innerHTML += `<td>${user[i]}</td>
                `
            }
            //追加操作按钮元素
            tr.innerHTML += `<td class="text-right operation"><button class="update">更新</button><button class="delete">删除</button></td>`;
            //监听每行单元中按钮事件
            tr.querySelector('.operation').addEventListener('click', e => {
                // 根据类名来进行数据处理
                if (e.target.className == "update") {
                    inputs.forEach(input => {
                        for (let i in user) {
                            //输入框属性与数据的key一致，将输入框赋值
                            if (input.name == i) {
                                input.value = user[i]
                                updateIndex = index
                            }
                        }
                    })
                    isUpdate = true;
                };
                if (e.target.className == "delete") {
                    userList[index] = null
                    tr.remove()
                    console.log("user", userList)
                };
            });
            tbody.appendChild(tr)
        });
    };
})();