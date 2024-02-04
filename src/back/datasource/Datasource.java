package src.back.datasource;

import src.back.exception.DatasourceException;


/**
 * This is the interface that defines a Datasource and allows for mocking
 */
public interface Datasource {
    public Integer getCompatibility(String sign1, String sign2);
    public String getSign(Integer month, Integer day, Integer year) throws DatasourceException;
    public String getEmail(String name, String name2) throws Exception;


    }
