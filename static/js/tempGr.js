function getTempGr(){
    var indate_list = [];
    $.ajax({
        url:"/get_datas",
        data: {},
        method: "GET",
        success: function(response){
            if(response["result"] == "success"){
                for (i = 0 ; i < 6 ; i ++){
                    indate_list[i] = response["data_list_top6"][i][2]
                }
                JSON.stringify(indate_list);
            }
        }
    })
    const ctx = document.getElementById('TempGr').getContext('2d');
    let GrStatus = Chart.getChart("TempGr");
    if (GrStatus != undefined) {
        GrStatus.destroy();
    }
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["1","2","3","4","5","6"],
                // [
                // // {% for i in data_list_top6[::-1] %}
                // // '{{ i[2] }}',
                // // {% endfor %}
                // '-5','-4','-3','-2','-1','0'
                // ],
                datasets: [{
                    label: '#temperature by time',
                    data: [
                    // {% for i in data_list_top6[::-1] %}
                    // {{ i[3] }},
                    // {% endfor %}
                    1,2,3,4,5,6
                    ],
                    backgroundColor:
                        'rgba(153, 102, 255, 0.2)'

                    ,
                    borderColor:

                        'rgba(153, 102, 255, 1)'

                    ,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
                ,animation: false
            }
        });
}

getTempGr();
setInterval(getTempGr, 1000);