import pickle
import random


class DataLoader:
    def __init__(self, convfile, model3file, dodecafile):
        self.convfile = convfile
        self.model3file = model3file
        self.dodecafile = dodecafile
        self.convdata = self.load_conv_data()

    def load_conv_data(self):
        file = open(self.convfile, "rb")
        return pickle.load(file)

    def sampledata(self, num_samples):
        sampled_indexes = random.sample(list(self.convdata), num_samples)
        sampled_data = {key: self.convdata[key] for key in sampled_indexes}
        return sampled_data

if __name__ == '__main__':
    dataloader = DataLoader(convfile='./backend/data/conversation.pkl',
                            model3file=None,
                            dodecafile=None)
    dataloader.sampledata(10)

