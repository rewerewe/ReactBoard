package com.example.demo.board.data;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardDao {
  public List<BoardDto> selectBoard();
  public BoardDto detailBoard(int id);
  public int insertBoard(BoardDto board);
  public int updateBoard(BoardDto board);
  public int deleteBoard(int id);
  public int updateHit(int id);
}
