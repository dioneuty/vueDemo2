package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
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
    public @ResponseBody String getBulList() { 
    	LOG.debug("게시판 목록 출력 중");
    	Gson gson = new Gson();
    	
    	List<Map<String,Object>> bulList = testRepo.selectAllTest();
    	
    	String sJson = gson.toJson(bulList);
    	return sJson;
    }
    
    /**
     * 스레드 상세 - 테스트 api
     * @return String
     */
    @RequestMapping(path = "/getOneBulThread")
    public @ResponseBody String getOneBulThread() { 
    	LOG.debug("게시판 목록 출력 중");
    	Gson gson = new Gson();
    	
    	List<Map<String,Object>> bulList = testRepo.selectAllTest();
    	
    	String sJson = gson.toJson(bulList);
    	return sJson;
    }    

    @RequestMapping(path = "/createOneBulThread")
    public Integer createOneBulThread(@RequestParam Map<String,Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	
    	String sId = (String) paramMap.get("id");
    	String sCont = (String) paramMap.get("content"); 
    	
    	if(StringUtils.isEmpty(sId)) return 0;

    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("id", sId);
    	map.put("content", sCont);
    	
    	Integer nResult = testRepo.insertTest(map);
    	return nResult;
    }
    
    @RequestMapping(path = "/deleteOneBulThreadByUserId")
    public Integer deleteOneBulThreadByUserId(@RequestParam Map<String,Object> paramMap) { 
    	LOG.debug("게시판 목록 출력 중");
    	
    	String sId = (String) paramMap.get("id");
    	Integer nIdx = (Integer) paramMap.get("idx");
    	if(StringUtils.isEmpty(sId) || StringUtils.isEmpty(nIdx) ) return 0;

    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("id", sId);
    	map.put("idx", nIdx);
    	
    	Integer nResult = testRepo.deleteTest(map);
    	return nResult;
    }    
}
