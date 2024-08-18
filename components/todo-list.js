"use client";
import React, { useState } from "react";

const TodoList = ({ todos }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span style={styles.title}>{todo.title}</span>
            <span style={styles.date}>{todo.dot}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    color: "#888",
  },
};

export default TodoList;
