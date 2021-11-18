from flask import Flask, jsonify,render_template,request
import pymysql
import time

dbconn = pymysql.connect(
            host = '192.168.56.1',
            port = 3306,
            user = 'root',
            passwd = 'root',
            db = 'Diffuser',
            charset = 'utf8'
        )
cursor = dbconn.cursor()


app = Flask(__name__)


@app.route('/')
def main():
    sql = "select *from iot;"
    cursor.execute(sql)
    data_list_full = cursor.fetchall()
    sql = "select *from iot order by num desc limit 6;"
    cursor.execute(sql)
    data_list_top6 = cursor.fetchall()
    return render_template('index.html', data_list_full=data_list_full, data_list_top6=data_list_top6)


@app.route('/get_datas', methods=["GET"])
def get_datas():
    sql = "select *from iot;"
    cursor.execute(sql)
    data_list_full = cursor.fetchall()
    sql = "select *from iot order by num desc limit 6;"
    cursor.execute(sql)
    data_list_top6 = cursor.fetchall()
    return jsonify({"result" : "success","data_list_full":data_list_full, "data_list_top6":data_list_top6})


@app.route('/iot', methods=["GET","POST"])
def iot():
    if request.method == 'GET':
        pir = request.args.get('pir')
        indate = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
        temper = request.args.get('temper')
        humidity = request.args.get('humidity')
        d_1 = request.args.get('d_1')
        d_2 = request.args.get('d_2')
        d_3 = request.args.get('d_3')

        sql = "insert into iot set pir = '%s', indate='%s', temper='%s', humidity='%s', d_1='%s', d_2='%s', d_3='%s';" % (pir, indate, temper, humidity, d_1, d_2, d_3)
        cursor.execute(sql)
        dbconn.commit()
    return "ok"


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)