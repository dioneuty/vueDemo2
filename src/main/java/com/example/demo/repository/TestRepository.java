package com.example.demo.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TestDto;

@Mapper
@Repository
public interface TestRepository {
	public Integer insertTest (Map<String,Object> Test);
    public Integer updateTest (Map<String,Object> Test);
    public Integer deleteTest (Map<String,Object> Test);
    public Map<String,Object> selectOneTest (Map<String,Object> Test);
    public List<Map<String,Object>> selectAllTest(Map<String,Object> Test);
	public Integer selectCountTest();
}
