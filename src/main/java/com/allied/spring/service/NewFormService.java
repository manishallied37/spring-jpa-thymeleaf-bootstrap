package com.allied.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allied.spring.domain.NewFormAPIDto;
import com.allied.spring.domain.NewFormRepository;

@Service
public class NewFormService {

	@Autowired
	NewFormRepository newFromRepo;

	public String insertAdminData() {
		NewFormAPIDto newFormAPIDto = new NewFormAPIDto();
		newFormAPIDto.setId(111);
		newFormAPIDto.setNameOfApi("Security");
		newFormAPIDto.setApiDescription("security of apis");
		newFormAPIDto.setInputParametersName("test");
		newFormAPIDto.setInputParametersType("test");
		newFormAPIDto.setInputParametersDescription("test");
		newFormAPIDto.setInputParametersMandatory("test");
		System.out.println("checkpoint 1");
		newFormAPIDto.setOutputParametersName("test");
		newFormAPIDto.setOutputParametersType("test");
		newFormAPIDto.setOutputParametersDescription("test");
		newFormAPIDto.setPossibleErrorsErrorCode("test");
		newFormAPIDto.setPossibleErrorsErrorName("test");
		newFormAPIDto.setPossibleErrorsErrorLogs("test");
		newFormAPIDto.setSamplePacketRequest("{'test':'test'}");
		newFormAPIDto.setRequestJson("{'test':'test'}");
		newFormAPIDto.setResponseJson("{'test':'test'}");

		newFromRepo.save(newFormAPIDto);

		System.out.println("checkpoint 2");
		System.out.println(newFormAPIDto);
		return "FormForNewAPI";

	}

	public String fetchApiData() {
		NewFormAPIDto newFormAPIDto = new NewFormAPIDto();
		newFormAPIDto.getId();
		newFormAPIDto.getApiDescription();
		newFormAPIDto.getInputParametersName();
		newFormAPIDto.getInputParametersType();
		newFormAPIDto.getInputParametersDescription();
		newFormAPIDto.getInputParametersMandatory();
		newFormAPIDto.getOutputParametersName();
		newFormAPIDto.getOutputParametersType();
		newFormAPIDto.getOutputParametersDescription();
		newFormAPIDto.getPossibleErrorsErrorCode();
		newFormAPIDto.getPossibleErrorsErrorName();
		newFormAPIDto.getPossibleErrorsErrorLogs();
		newFormAPIDto.getSamplePacketRequest();
		newFormAPIDto.getRequestJson();
		newFormAPIDto.getResponseJson();
		System.out.println(newFormAPIDto.getApiDescription());
		newFromRepo.findAll();

		return "FormForNewAPI";

	}
}
