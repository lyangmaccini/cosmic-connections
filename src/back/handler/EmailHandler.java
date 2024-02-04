package src.back.handler;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import spark.Request;
import spark.Response;
import spark.Route;
import src.back.datasource.Datasource;
import src.back.email.EmailSender;
import src.back.exception.DatasourceException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

public class EmailHandler implements Route {
    private Datasource datasource;

    public EmailHandler(Datasource datasource) {
        this.datasource = datasource;
    }

    public Object handle(Request request, Response response) {
        Moshi moshi = new Moshi.Builder().build();
        Type mapObject = Types.newParameterizedType(Map.class, String.class, Object.class);
        JsonAdapter<Map<String, Object>> mapAdapter = moshi.adapter(mapObject);
        Map<String, Object> responseMap = new HashMap<>();
        try {
            String address = request.queryParams("email");
            String name = request.queryParams("name");
            responseMap.put("name1", address);

            String email = this.datasource.getEmail(address, name);
            EmailSender emailSender = new EmailSender();
            emailSender.sendEmail(address, email);

        } catch (Exception e) {
            responseMap.put("result", "error");
            responseMap.put("error", e.getMessage());
        }
        return mapAdapter.toJson(responseMap);
    }
}