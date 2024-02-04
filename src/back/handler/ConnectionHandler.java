package src.back.handler;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import spark.Request;
import spark.Response;
import spark.Route;
import src.back.datasource.Datasource;
import src.back.exception.DatasourceException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

public class ConnectionHandler implements Route {
    private Datasource datasource;

    public ConnectionHandler(Datasource datasource) {
        this.datasource = datasource;
    }

    public Object handle(Request request, Response response) {
        Moshi moshi = new Moshi.Builder().build();
        Type mapObject = Types.newParameterizedType(Map.class, String.class, Object.class);
        JsonAdapter<Map<String, Object>> mapAdapter = moshi.adapter(mapObject);
        Map<String, Object> responseMap = new HashMap<>();

        try {
            String date1 = request.queryParams("date1");
            String date2 = request.queryParams("date2");

            String[] split1 = date1.split("/");
            String[] split2 = date2.split("/");

            int month1 = Integer.parseInt(split1[0]);
            int day1 = Integer.parseInt(split1[1]);
            int year1 = Integer.parseInt(split1[2]);
            int month2 = Integer.parseInt(split2[0]);
            int day2 = Integer.parseInt(split2[1]);
            int year2 = Integer.parseInt(split2[2]);

            String sign1 = this.datasource.getSign(month1, day1, year1);
            String sign2 = this.datasource.getSign(month2, day2, year2);

            Integer compatibility = this.datasource.getCompatibility(sign1, sign2);
            responseMap.put("result", "success");
            responseMap.put("sign 1", sign1);
            responseMap.put("sign 2", sign2);
            responseMap.put("score", compatibility);
        } catch (DatasourceException e) {
            responseMap.put("result", "error");
            responseMap.put("error", e.getMessage());
        } catch (NumberFormatException e) {
            responseMap.put("result", "error");
            responseMap.put("error", "date inputted NaN");
        }
        return mapAdapter.toJson(responseMap);
    }
}
