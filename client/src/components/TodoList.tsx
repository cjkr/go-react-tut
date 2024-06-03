import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const todos = [
    {
      _id: 1,
      body: "Buy groceries",
      completed: true,
    },
    {
      _id: 2,
      body: "Shave hair",
      completed: false,
    },
    {
      _id: 3,
      body: "Walk dog",
      completed: false,
    },
    {
      _id: 4,
      body: "Read book",
      completed: true,
    },
  ];

  return (
    <>
      <Text
        fontSize={"4xl"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
        textAlign={"center"}
        my={2}
        bgGradient="linear(to-l, #0b85f8, #00ffff)"
        bgClip="text"
      >
        Today's Tasks
      </Text>
      {isLoading && (
        <Flex justifyContent={"center"} my={4}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {!isLoading && todos?.length === 0 && (
        <Stack alignItems={"center"} gap={"3"}>
          <Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
            All tasks completed! 🤞
          </Text>
          <img src="/go.png" alt="Go logo" width={70} height={70} />
        </Stack>
      )}
      <Stack gap={3}>
        {todos?.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </Stack>
    </>
  );
}