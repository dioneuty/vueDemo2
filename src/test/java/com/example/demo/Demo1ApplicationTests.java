package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.example.demo.repository.TestRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
class Demo1ApplicationTests {
	@Autowired
	private TestRepository tMapper;
	
    @Test
    public void testBulletin() {
    	Map<String, Object> map = new HashMap<String, Object>();
    	
    	map.put("id", "5");
    	map.put("name", "test");
//        tMapper.insertTest(map);
        
        System.out.println("전체 선택 테스트");
        System.out.println(tMapper.selectAllTest());
        System.out.println("일부 선택 테스트");
        
    	map.put("id", "3");
    	map.put("name", "test");
        System.out.println(tMapper.selectOneTest(map));
    }	

}
