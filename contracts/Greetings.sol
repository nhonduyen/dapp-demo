// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Greetings {
  string public greeting = "hello";

  function updateGreetings(string calldata _greeting) external {
    greeting = _greeting;
  }

  function sayHello() external view returns (string memory) {
    return greeting;
  }
}
