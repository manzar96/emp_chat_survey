from flask import Flask, request
from flask_cors import CORS
from src.connectDB import DBConnect
from src.loaddata import DataLoader

app = Flask(__name__)
CORS(app)
dbconn = DBConnect(dbname="empchat_user",
                   user="empchat_user",
                   host='0.0.0.0',
                   password='manoszar',
                   port=8888)

dataloader = DataLoader(convfile='./data/conversation.pkl',
                        model3file='./data/mymodel.csv',
                        dodecafile='./data/dodeca.csv')
mymodeldata = dataloader.load_mymodel_data()
dodecadata = dataloader.load_dodeca_data()


@app.route('/page1',methods=["GET"])
def createconvpage1():
    dataloader.load_mymodel_data()
    conv_data = dataloader.sampledata(num_samples=2)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion
    # return kai ena success pedio
    print("done")
    final_dict = {}
    for key in conv_data.keys():
        final_dict[key] = {"input": conv_data[key],
                           "mymodel": mymodeldata[key]["response"],
                           "dodeca": dodecadata[key]["response"],
                           "target": mymodeldata[key]["target"],
                           "emo": mymodeldata[key]["emo"],
                           "situation": "dummy situation"}
    return final_dict

@app.route('/page2',methods=["GET"])
def createconvpage2():
    conv_data = dataloader.sampledata(num_samples=2)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion
    # return kai ena success pedio
    print("done")
    final_dict = {}
    for key in conv_data.keys():
        final_dict[key] = {"input": conv_data[key],
                           "mymodel": mymodeldata[key]["response"],
                           "dodeca": dodecadata[key]["response"],
                           "target": mymodeldata[key]["target"],
                           "emo": mymodeldata[key]["emo"],
                           "situation": "dummy situation"}
    return final_dict

@app.route('/page3',methods=["GET"])
def createconvpage3():
    conv_data = dataloader.sampledata(num_samples=2)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion
    # return kai ena success pedio
    print("done")
    final_dict = {}
    for key in conv_data.keys():
        for key in conv_data.keys():
            final_dict[key] = {"input": conv_data[key],
                               "mymodel": mymodeldata[key]["response"],
                               "dodeca": dodecadata[key]["response"],
                               "target": mymodeldata[key]["target"],
                               "emo": mymodeldata[key]["emo"],
                               "situation": "dummy situation"}
    return final_dict

@app.route('/page4',methods=["GET"])
def createconvpage4():
    conv_data = dataloader.sampledata(num_samples=2)
    # add here model3 outputs and dodeca outputs
    # then return a full dict-json with keys: input,model3,dodeca,target,
    # emotion
    # return kai ena success pedio
    print("done")
    final_dict = {}
    for key in conv_data.keys():
        final_dict[key] = {"input": conv_data[key],
                           "mymodel": mymodeldata[key]["response"],
                           "dodeca": dodecadata[key]["response"],
                           "target": mymodeldata[key]["target"],
                           "emo": mymodeldata[key]["emo"],
                           "situation": "dummy situation"}
    return final_dict


@app.route('/savedb', methods=["POST"])
def savetodb():
    req_data = request.get_json()
    dbconn.save_data(req_data)
    return 'Data saved'


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5001)