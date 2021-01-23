from flask import Flask, request
from flask_cors import CORS
from connectDB import DBConnect
from loaddata import DataLoader

app = Flask(__name__)
CORS(app)
dbconn = DBConnect(dbname="postgres",
                   user="postgres",
                   host='0.0.0.0',
                   password='manoszar',
                   port=8888)

dataloader = DataLoader(convfile='../data/conversation.pkl',
                        model3file=None,
                        dodecafile=None)


@app.route('/<name>',methods=["GET"])
def dummy(name):
    print(name)
    return 'Hello World'


@app.route('/page1',methods=["GET"])
def createconvpage1():
    conv_data = dataloader.sampledata(num_samples=2)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion
    # return kai ena success pedio
    print("done")
    final_dict = {}
    for key in conv_data.keys():
        final_dict[key] = {"input": conv_data[key],
                           "mymodel": "Dummy Model Answer",
                           "dodeca": "Dummy Dodeca Answer",
                           "target": "Dummy target answer",
                           "emo": "dummy emotion label",
                           "situation": "dummy situation"}
    return final_dict


@app.route('/page2',methods=["GET"]) # maybe needs PUT
def createconvpage2():
    conv_data = dataloader.sampledata(num_samples=10)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion

    return conv_data


@app.route('/savedb', methods=["POST"])
def savetodb():
    data = request.form["checkbox"]
    print(data)
    dbconn.execute_query()
    return 'Data saved'


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5001)