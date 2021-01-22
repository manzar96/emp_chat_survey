import psycopg2

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
            return connection
        except psycopg2.Error as e:
            print("Unable to connect to {} database".format(self.dbname))
            print(str(e.pgerror))

    def execute_query(self):
        print("query done")
        pass
