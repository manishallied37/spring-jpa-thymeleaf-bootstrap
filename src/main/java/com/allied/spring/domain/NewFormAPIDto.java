package com.allied.spring.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class NewFormAPIDto {

    private int id;
    private String nameOfApi;
    private String apiDescription;
    private String inputParametersName;
    private String inputParametersType;
    private String inputParametersDescription;
    private String inputParametersMandatory;
    private String outputParametersName;
    private String outputParametersType;
    private String outputParametersDescription;
    private String possibleErrorsErrorCode;
    private String possibleErrorsErrorName;
    private String possibleErrorsErrorLogs;
    private String samplePacketRequest;
    private String requestJson;
    private String responseJson;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameOfApi() {
        return nameOfApi;
    }

    public void setNameOfApi(String nameOfApi) {
        this.nameOfApi = nameOfApi;
    }

    public String getApiDescription() {
        return apiDescription;
    }

    public void setApiDescription(String apiDescription) {
        this.apiDescription = apiDescription;
    }

    public String getInputParametersName() {
        return inputParametersName;
    }

    public void setInputParametersName(String inputParametersName) {
        this.inputParametersName = inputParametersName;
    }

    public String getInputParametersType() {
        return inputParametersType;
    }

    public void setInputParametersType(String inputParametersType) {
        this.inputParametersType = inputParametersType;
    }

    public String getInputParametersDescription() {
        return inputParametersDescription;
    }

    public void setInputParametersDescription(String inputParametersDescription) {
        this.inputParametersDescription = inputParametersDescription;
    }

    public String getInputParametersMandatory() {
        return inputParametersMandatory;
    }

    public void setInputParametersMandatory(String inputParametersMandatory) {
        this.inputParametersMandatory = inputParametersMandatory;
    }

    public String getOutputParametersName() {
        return outputParametersName;
    }

    public void setOutputParametersName(String outputParametersName) {
        this.outputParametersName = outputParametersName;
    }

    public String getOutputParametersType() {
        return outputParametersType;
    }

    public void setOutputParametersType(String outputParametersType) {
        this.outputParametersType = outputParametersType;
    }

    public String getOutputParametersDescription() {
        return outputParametersDescription;
    }

    public void setOutputParametersDescription(String outputParametersDescription) {
        this.outputParametersDescription = outputParametersDescription;
    }

    public String getPossibleErrorsErrorCode() {
        return possibleErrorsErrorCode;
    }

    public void setPossibleErrorsErrorCode(String possibleErrorsErrorCode) {
        this.possibleErrorsErrorCode = possibleErrorsErrorCode;
    }

    public String getPossibleErrorsErrorName() {
        return possibleErrorsErrorName;
    }

    public void setPossibleErrorsErrorName(String possibleErrorsErrorName) {
        this.possibleErrorsErrorName = possibleErrorsErrorName;
    }

    public String getPossibleErrorsErrorLogs() {
        return possibleErrorsErrorLogs;
    }

    public void setPossibleErrorsErrorLogs(String possibleErrorsErrorLogs) {
        this.possibleErrorsErrorLogs = possibleErrorsErrorLogs;
    }

    public String getSamplePacketRequest() {
        return samplePacketRequest;
    }

    public void setSamplePacketRequest(String samplePacketRequest) {
        this.samplePacketRequest = samplePacketRequest;
    }

    public String getRequestJson() {
        return requestJson;
    }

    public void setRequestJson(String requestJson) {
        this.requestJson = requestJson;
    }

    public String getResponseJson() {
        return responseJson;
    }

    public void setResponseJson(String responseJson) {
        this.responseJson = responseJson;
    }


}
