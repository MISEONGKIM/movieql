# movieql
Movie API with Graphql

Graphql로 해결할 수 있는 문제 2가지 

Over-fetching : 내가 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것
                /get 요청을 할 경우, 내가 필요한 건 이름인데 db에서 나이,성별 등 사용자 정보를 다 넘겨줄 경우. 어차피 나이랑 성별을 나중에 사용한다고 괜찮아보이지만, db에 내가 사용하지 않을 영역을 요청하는 방식은 효율적이지 못하다.

Under-fetching : 어떤 하나를 완성하기위해 다른 요청들을 해야할 때 발생,
                예를 들어 인스타그램  첫 실행할때, 요청 3가지(피드, 알림, 사용자프로필)를 받아야 앱이 시작함 이게 Under-fetching
                REST에서 하나를 완성하려고 많은 소스를 요청하는 것.

Graphql은 한 query에서 정확하게 원하는 정보만 받을 수 있다 !

Graphql의 Playground : 내 데이터베이스를 테스트하게 해주는 것 

nodemon으로 실행 시 javascript가 변경되는건 재시작되지만 graphql파일 변경되면 재시작안함.

graphql server 요청받음 -> 서버가 Query, mutation 정의 발견 -> resolvers 해당 함수 실행

Query, mutation는 url 같은 것, 

graphql은 Operation(질문)에서(Ouery) 데이터가 어떻게 보일 지 정의하고 Operation을 해결하는 함수를(resolver) 만드는 것이 요점이다. resolvers는 어떤 것도 될 수 있다.

Mutation은 database 상태가 변할 때 사용되는 것.