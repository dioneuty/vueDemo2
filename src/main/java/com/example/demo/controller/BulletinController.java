package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.TestRepository;
import com.google.gson.Gson;

/**
 * 게시판 api 컨트롤러
 * @author Administrator
 * CRUD(CREATE/READ/UPDATE/DELETE), 기타 api 담당
 */
@RestController
@RequestMapping("/api")
public class BulletinController {
	
	private static final Logger LOG = LoggerFactory.getLogger(BulletinController.class);
	
    @Autowired
    private TestRepository testRepo;
    
    /**
     * 목록 전체 출력 - 테스트 api
     * @return String
     */
    @RequestMapping(path = "/getBulList")
    public @ResponseBody String getBulList(@RequestParam Map<String, Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	Gson gson = new Gson();
    	
    	List<Map<String,Object>> bulList = testRepo.selectAllTest(paramMap);
    	
    	Integer nCount = testRepo.selectCountTest();

    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("list", bulList);
    	resultMap.put("cnt", nCount);
    	String sJson = gson.toJson(resultMap);
    	
    	LOG.debug(sJson);
    	
    	return sJson;
    }
    
    /**
     * 스레드 상세 - 테스트 api
     * @return String
     */
    @RequestMapping(path = "/getOneBulThread")
    public @ResponseBody String getOneBulThread(@RequestParam Map<String,Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	Gson gson = new Gson();
    	
    	List<Map<String,Object>> bulList = testRepo.selectAllTest(paramMap);
    	
    	String sJson = gson.toJson(bulList);
    	return sJson;
    }    

    @RequestMapping(path = "/createOneBulThread")
    public Integer createOneBulThread(@RequestParam Map<String,Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	
    	if(StringUtils.isEmpty((String) paramMap.get("id"))) return 0;

    	Integer nResult = testRepo.insertTest(paramMap);
    	return nResult;
    }
    
    @RequestMapping(path = "/deleteOneBulThreadByUserId")
    public Integer deleteOneBulThreadByUserId(@RequestParam Map<String,Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	
    	if(StringUtils.isEmpty((String) paramMap.get("idx"))) return 0;
    	
    	Integer nResult = testRepo.deleteTest(paramMap);
    	return nResult;
    }    
}
