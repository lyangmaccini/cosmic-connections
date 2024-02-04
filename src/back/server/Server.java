package src.back.server;

import src.back.datasource.APIDatasource;
import src.back.datasource.EmailDatasource;
import src.back.handler.*;
import spark.Spark;

import java.util.ArrayList;
import java.util.List;

import static spark.Spark.after;

/**
 * This class makes the server which makes all the handlers related to the project
 */
public class Server {
    private static ArrayList<List<String>> loadedCSV;
    private static List<String> header;
    private static Boolean hasHeader;
    private static Boolean isLoaded;

    /**
     * This method constructs the server and instantiates the instance variables and the port number. It also makes all
     * the handlers which basically handle all the user stories and goals of the program
     */
    public Server() {
        int port = 5555;

        Spark.port(port);
        after((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "*");
        });

        ConnectionHandler connectionHandler = new ConnectionHandler(new APIDatasource());
        Spark.get("connections", connectionHandler);

        EmailHandler emailHandler = new EmailHandler(new EmailDatasource());
        Spark.get("email", emailHandler);


        Spark.init();
        Spark.awaitInitialization();

        System.out.println("Server started at http://localhost:" + port);
    }

}
