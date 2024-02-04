package src.back.datasource;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.stream.Collectors;
import src.back.exception.DatasourceException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class EmailDatasource implements Datasource {

    private static final String API_KEY = "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";

    @Override
    public Integer getCompatibility(String sign1, String sign2) {
        return null;
    }

    @Override
    public String getSign(Integer month, Integer day, Integer year) throws DatasourceException {
        return null;
    }

    @Override
    public String getEmail(String name, String name2) throws Exception {
        String email = "you: " + name + " were sent a love letter from " + name2 + " based on your "
                + "star sign compatibilities: <3 ";
        String message = this.chatGPT(name, name2);
        return email + message;
    }
    public static String chatGPT(String name, String name2) {
        String prompt = "Write a love letter for a match where  " + name2 +
                " is writing to " + name + ". It's a match based on star sign"
                + " compatibility, so make it space themed please!";
        String url = "https://api.openai.com/v1/chat/completions";
        String apiKey = API_KEY;
        String model = "gpt-3.5-turbo";

        try {
            URL obj = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Authorization", "Bearer " + apiKey);
            connection.setRequestProperty("Content-Type", "application/json");

            // The request body
            String body = "{\"model\": \"" + model + "\", \"messages\": [{\"role\": \"user\", \"content\": \"" + prompt + "\"}]}";
            connection.setDoOutput(true);
            OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
            writer.write(body);
            writer.flush();
            writer.close();

            // Response from ChatGPT
            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;

            StringBuffer response = new StringBuffer();

            while ((line = br.readLine()) != null) {
                response.append(line);
            }
            br.close();

            // calls the method to extract the message.
            return extractMessageFromJSONResponse(response.toString()).replace("\\n", "\n");

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String extractMessageFromJSONResponse(String response) {
        int start = response.indexOf("content")+ 11;

        int end = response.indexOf("\"", start);

        return response.substring(start, end);

    }
}