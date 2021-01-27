import pickle
import random
import csv


class DataLoader:
    def __init__(self, convfile, model3file, dodecafile):
        self.convfile = convfile
        self.model3file = model3file
        self.dodecafile = dodecafile
        self.convdata = self.load_conv_data()

    def load_conv_data(self):
        file = open(self.convfile, "rb")
        return pickle.load(file)

    def load_mymodel_data(self):
        mymodel_dict = {}
        csvfile = open(self.model3file, 'r')
        csvreader = csv.reader(csvfile, delimiter='^', quotechar='"',
                                quoting=csv.QUOTE_MINIMAL)

        for index,row in enumerate(csvreader):
            if index==0:
                continue
            mymodel_dict[index-1] = {"emo":row[1],"response":row[3],
                                         "target":row[4]}
        return mymodel_dict

    def load_dodeca_data(self):
        dodeca_dict = {}
        csvfile = open(self.dodecafile, 'r')
        csvreader = csv.reader(csvfile, delimiter='^', quotechar='"',
                                quoting=csv.QUOTE_MINIMAL)

        for index,row in enumerate(csvreader):
            if index==0:
                continue
            dodeca_dict[index-1] = {"response":row[2],"target":row[3]}
        return dodeca_dict


    def sampledata(self, num_samples):
        sampled_indexes = random.sample(list(self.convdata), num_samples)
        sampled_data = {key: self.convdata[key] for key in sampled_indexes}
        return sampled_data

if __name__ == '__main__':
    dataloader = DataLoader(convfile='./data/conversation.pkl',
                            model3file='./data/mymodel.csv',
                            dodecafile='./data/dodeca.csv')

    dataloader.sampledata(10)

