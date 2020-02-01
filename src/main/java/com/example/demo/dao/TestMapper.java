package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.dto.TestDto;

@Mapper
public interface TestMapper {
	public void insertTest (Map<String,Object> Test);
    public void updateTest (Map<String,Object> Test);
    public void deleteTest (String TestId);
    public Map<String,Object> selectOneTest (String TestId);
    public List<Map<String,Object>> selectAllTest();
}
