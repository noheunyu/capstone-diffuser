function getHumGr(){
    const ctx = document.getElementById('HumGr').getContext('2d');
    let GrStatus = Chart.getChart("HumGr");    
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
                    label: '#humidity by time',
                    data: [
                    // {% for i in data_list_top6[::-1] %}
                    // {{ i[4] }},
                    // {% endfor %}
                    1,2,3,4,5,6
                    ],
                    backgroundColor: 
                        'rgba(255, 159, 64, 0.2)'
                    ,
                    borderColor: 
                        'rgba(255, 159, 64, 1)'
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

getHumGr();
setInterval(getHumGr, 1000);