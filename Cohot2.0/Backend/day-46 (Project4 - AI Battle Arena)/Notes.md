# models.ai.ts: All the three models used in this project were created in this file

# config.ts: Setting up enviormental variables

# graph.ai.js: This is the main MVP of the project uses LangGraph
1. Langgraph is used to create multi-step ai application where multiple tasks are involved and it also orchestrate the multiple ai models

2. There are 3 main thing: Node, Edge, State

a. Node - It is a function where task is performed, START/END nodes are common in any langgraph code
b. lEdge - It used to connect the graph nodes 
c. State - It is like store where all the nodes can read and write the data 

# providerStrategy: It is used to get structured response from ai model 

# zod: It is input validator, widly used while creating ai application 