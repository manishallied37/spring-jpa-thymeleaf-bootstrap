package com.allied.spring.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "adminData")
public class FormForAPI {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nameOfApi")
    private String nameOfApi;

    @Column(name = "apiDescription")
    private String apiDescription;

    @Column(name = "inputParametersName")
    private String inputParametersName;

    @Column(name = "inputParametersType")
    private String inputParametersType;

    @Column(name = "inputParametersDescription")
    private String inputParametersDescription;

    @Column(name = "inputParametersMandatory")
    private String inputParametersMandatory;

    @Column(name = "outputParametersName")
    private String outputParametersName;

    @Column(name = "outputParametersType")
    private String outputParametersType;

    @Column(name = "outputParametersDescription")
    private String outputParametersDescription;

    @Column(name = "possibleErrorsErrorCode")
    private String possibleErrorsErrorCode;

    @Column(name = "possibleErrorsErrorName")
    private String possibleErrorsErrorName;

    @Column(name = "possibleErrorsErrorLogs")
    private String possibleErrorsErrorLogs;

    @Column(name = "samplePacketRequest")
    private String samplePacketRequest;

    @Column(name = "requestJson")
    private String requestJson;

    @Column(name = "responseJson")
    private String responseJson;


}
