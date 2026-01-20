package com.allied.spring.domain;

import com.allied.spring.web.dto.SwaggerFile;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SwaggerFileRepository extends JpaRepository<SwaggerFile, Long> {
	
	SwaggerFile findTopByOrderByUploadDateDesc();
	
	
	@Modifying(clearAutomatically = true, flushAutomatically = true)
	@Query(
		    "UPDATE SwaggerFile s " +
		    "SET s.jsonContent = :content, " +
		    "    s.uploadDate = :uploadDate " +
		    "WHERE s.apiName = :apiName"
		)
	int updateByApiName(
	    @Param("apiName") String apiName,
	    @Param("content") String content,
	    @Param("uploadDate") LocalDateTime uploadDate
	);

}
