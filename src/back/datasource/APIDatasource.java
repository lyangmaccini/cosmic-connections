package src.back.datasource;

import com.squareup.moshi.*;
import okio.BufferedSource;
import okio.Okio;
import src.back.exception.DatasourceException;
import java.io.*;

public class APIDatasource implements Datasource {
    private Compatibility compatibilities;

    public APIDatasource() {
        try {
            String data = "src/data/compatibilities.json";
            Moshi moshi = new Moshi.Builder().build();
            BufferedSource bufferedSource = Okio.buffer(Okio.source(new File(data)));
            JsonReader jsonReader = JsonReader.of(bufferedSource);
            this.compatibilities = moshi.adapter(Compatibility.class).fromJson(jsonReader);
        } catch (FileNotFoundException e) {
            System.out.println("File not found!!");
        } catch (IOException e) {
            System.out.println("IO Exception");
        }

    }

    public Integer getCompatibility(String sign1, String sign2) {
        if (this.compatibilities.c().get(sign1).get(sign2) == null) {
            return this.compatibilities.c().get(sign2).get(sign1);
        }
        return this.compatibilities.c().get(sign1).get(sign2);
    }

    public String getSign(Integer month, Integer day, Integer year) throws DatasourceException {
        String sign = "";
        switch (month) {
            case 1:
                if (day < 20 && day > 0) {
                    sign = "capricorn";
                } else if (day < 32 && day >= 20) {
                    sign = "aquarius";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 2:
                if (day < 19 && day > 0) {
                    sign = "aquarius";
                } //if leap year:
                else if ((year % 4 == 0) && day < 30 && day >= 19) {
                    sign = "pisces";
                } // if not leap year
                else if ((year % 4 != 0) && day < 29 && day >= 19) {
                    sign = "pisces";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 3:
                if (day < 21 && day > 0) {
                    sign = "pisces";
                } else if (day < 32 && day >= 21) {
                    sign = "aries";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 4:
                if (day < 20 && day > 0) {
                    sign = "aries";
                } else if (day < 31 && day >= 20) {
                    sign = "taurus";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 5:
                if (day < 21 && day > 0) {
                    sign = "taurus";
                } else if (day < 32 && day >= 21) {
                    sign = "gemini";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 6:
                if (day < 22 && day > 0) {
                    sign = "gemini";
                } else if (day < 31 && day >= 22) {
                    sign = "cancer";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 7:
                if (day < 23 && day > 0) {
                    sign = "cancer";
                } else if (day < 32 && day >= 23) {
                    sign = "leo";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 8:
                if (day < 23 && day > 0) {
                    sign = "leo";
                } else if (day < 32 && day >= 23) {
                    sign = "virgo";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 9:
                if (day < 23 && day > 0) {
                    sign = "virgo";
                } else if (day < 31 && day >= 23) {
                    sign = "libra";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 10:
                if (day < 24 && day > 0) {
                    sign = "libra";
                } else if (day < 32 && day >= 24) {
                    sign = "scorpio";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 11:
                if (day < 22 && day > 0) {
                    sign = "scorpio";
                } else if (day < 31 && day >= 22) {
                    sign = "sagittarius";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            case 12:
                if (day < 22 && day > 0) {
                    sign = "sagittarius";
                } else if (day < 32 && day >= 22) {
                    sign = "capricorn";
                } else {
                    throw new DatasourceException("Invalid date.");
                }
                break;
            default:
                throw new DatasourceException("Invalid month.");
        }
        return sign;
    }
    public String getEmail(String name, String name2) {
        return null;
    }
}





