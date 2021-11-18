function getDiffuserGr(){
    const ctx = document.getElementById('DiffuserGr').getContext('2d');
    let GrStatus = Chart.getChart("DiffuserGr");    
    if (GrStatus != undefined) {
        GrStatus.destroy();
    }
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                // {% for i in data_list_top6[::-1] %}
                // '{{ i[2] }}',
                // {% endfor %}
                '-5','-4','-3','-2','-1','0'
                ],
                datasets: [{
                    label: '#d_1 by time',
                    data: [
                    // {% for i in data_list_top6[::-1] %}
                    // {{ i[4] }},
                    // {% endfor %}
                    7,3,2,7,5,3
                    ],
                    backgroundColor: 
                    'rgba(255, 99, 132, 0.2)'
                    ,
                    borderColor: 
                    'rgba(255, 99, 132, 1)'
                    ,
                    borderWidth: 1
                },
                {
                    label: '#d_2 by time',
                    data: [
                    // {% for i in data_list_top6[::-1] %}
                    // {{ i[4] }},
                    // {% endfor %}
                    1,2,3,4,5,6
                    ],
                    backgroundColor: 
                    'rgba(54, 162, 235, 0.2)'
                    ,
                    borderColor: 
                    'rgba(54, 162, 235, 1)'
                    ,
                    borderWidth: 1
                },
                {
                    label: '#d_3 by time',
                    data: [
                    // {% for i in data_list_top6[::-1] %}
                    // {{ i[4] }},
                    // {% endfor %}
                    1,2,3,2,5,2
                    ],
                    backgroundColor: 
                    'rgba(255, 206, 86, 0.2)'
                    ,
                    borderColor: 
                    'rgba(255, 206, 86, 1)'
                    ,
                    borderWidth: 1
                }

            ]
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

getDiffuserGr();
setInterval(getDiffuserGr, 1000);