package com.example.demo.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.board.data.BoardDto;

@Service
public class BoardService {

  @Autowired
  BoardRepository repository;

  public List<BoardDto> selectBoard() {
    List<BoardDto> result = new ArrayList<>();
    result = repository.selectBoard();
    return result;
  }

  public BoardDto detailBoard(int id) {
    repository.updateHit(id); // 조회수 업데이트 
    
    BoardDto board = new BoardDto();
    board = repository.detailBoard(id);
    return board;
  }

  public int insertBoard(BoardDto board) {
    board.setHit(board.getHit()+1); // 조회수
    return repository.insertBoard(board);
  }

  public int updateBoard(int id, BoardDto board) {
    board.setId(id);
    board.setHit(board.getHit()+1); // 조회수
    return repository.updateBoard(board);
  }

  public int deleteBoard(int id) {
    return repository.deleteBoard(id);
  }
}