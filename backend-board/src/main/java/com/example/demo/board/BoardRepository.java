package com.example.demo.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.board.data.BoardDao;
import com.example.demo.board.data.BoardDto;

@Repository
public class BoardRepository {

  @Autowired
  BoardDao dao;

  public List<BoardDto> selectBoard() {
    return dao.selectBoard();
  }

  public BoardDto detailBoard(int id) {
    return dao.detailBoard(id);
  }

  public int insertBoard(BoardDto board) {
    return dao.insertBoard(board);
  }

  public int updateBoard(BoardDto board) {
    return dao.updateBoard(board);
  }

  public int deleteBoard(int id) {
    return dao.deleteBoard(id);
  }

  public int updateHit(int id) {
    return dao.updateHit(id);
  }
}