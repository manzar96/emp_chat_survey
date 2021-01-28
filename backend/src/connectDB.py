import psycopg2
import json

class DBConnect:
    def __init__(self,
                 dbname,
                 user,
                 host,
                 password,
                 port):
        self.dbname = dbname
        self.user = user
        self.host = host
        self.password = password
        self.port = port
        self.db_connection = self.connect_to_database()

    def connect_to_database(self):
        try:
            connection = psycopg2.connect(dbname=self.dbname, user=self.user,
                                    host=self.host, password=self.password,
                                    port=self.port)
            print("Connected to {} database".format(self.dbname))
            return connection
        except psycopg2.Error as e:
            print("Unable to connect to {} database".format(self.dbname))
            print(str(e.pgerror))


    def save_data(self,req_data):
        json1 = req_data["convs1_res"]
        json2 = req_data["convs2_res"]
        json3 = req_data["convs3_res"]
        json4 = req_data["convs4_res"]

        list_dict1 = json.loads(json1)
        list_dict2 = json.loads(json2)
        list_dict3 = json.loads(json3)
        list_dict4 = json.loads(json4)



        convs1_res = []
        for sample in list_dict1:
            key = int(sample["key"])
            if sample["value"][0] == True:
                selection = 1
            elif sample["value"][1] == True:
                selection = 2
            else:
                raise IOError
            convs1_res.append([key, selection])

        convs2_res = []
        for sample in list_dict2:
            key = int(sample["key"])
            emp = int(sample["value"][0])
            rel = int(sample["value"][1])
            flu = int(sample["value"][2])
            convs2_res.append([key, emp, rel, flu])

        convs3_res = []
        for sample in list_dict3:
            key = int(sample["key"])
            emp = int(sample["value"][0])
            rel = int(sample["value"][1])
            flu = int(sample["value"][2])
            convs3_res.append([key, emp, rel, flu])

        convs4_res = []
        for sample in list_dict4:

            key = int(sample["key"])
            if sample["value"][0] == True:
                selection = 1
            elif sample["value"][1] == True:
                selection = 2
            else:
                raise IOError
            convs4_res.append([key, selection])

        import ipdb;
        ipdb.set_trace()

        # insertion of page1 (pairwise comparison)
        for sample in convs1_res:

            query = "INSERT INTO pairwise_comp (dialog_id,selection) VALUES (" \
                    "{},{})".format(sample[0],sample[1])
            self.execute_query1(query)

            import ipdb;
            ipdb.set_trace()

        # for sample in convs1_res:
        #     import ipdb;
        #     ipdb.set_trace()
        #     query = "INSERT INTO pairwise_comp (dialog_id,emp,rel,flu) VALUES ({},{},{})".format(sample[0],sample[1],sample[2],sample[3])
        #     self.execute_query1(query)        for sample in convs1_res:
        #     import ipdb;
        #     ipdb.set_trace()
        #     query = "INSERT INTO pairwise_comp (dialog_id,emp,rel,flu) VALUES ({},{},{})".format(sample[0],sample[1],sample[2],sample[3])
        #     self.execute_query1(query)




    def execute_query1(self,query):
        cursor = self.db_connection.cursor()
        cursor.execute(query)
        self.db_connection.commit()  # <- We MUST commit to reflect the inserted data
        cursor.close()
        print("query done")
