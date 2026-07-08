package com.cognizant.spring_learn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.Country;

@Service
public class CountryService {

    private static List<Country> countryList = new ArrayList<>();

    static {

        Country india = new Country();
        india.setCode("IN");
        india.setName("India");

        Country us = new Country();
        us.setCode("US");
        us.setName("United States");

        Country uk = new Country();
        uk.setCode("UK");
        uk.setName("United Kingdom");

        countryList.add(india);
        countryList.add(us);
        countryList.add(uk);
    }

    public Country findCountryByCode(String code) {

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}