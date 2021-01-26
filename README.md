# movieql
Movie API with Graphql

### REST API
    REST API는 모든 resource들을 하나의 endpoint에 연결하고 연결된 endpoint는 resource와 관련된 내용만 관리하게 하는 것. 모든 resource는 일반적으로 http 인터페이스인 GET, POST, PUT, DELETE 4개의 메소드로 접근 되어야함. 
    
    GET /user
    POST /user
    DELETE /user
    PUT /user

    REST API의 한계점 : REST API로 여러 환경에서 필요한 정보들을 Resource 별로 Endpoint를 갖도록 구현하는 것 어려워 비슷하지만 Endpoint가 다른 API가 많이 파생됨. Over-fetching, Under-fetching

### Over-fetching
    예를 들어 사용자데이터 조회하는 /user endpoint가 있다. 이 때 사용자 번호 1번 데이터 조회
    /GET /user/1/
    no, name, age, ..., 등을 반환함.
    그런데 필요한건 name만 필요 name만 반환하는 API 없을 경우, 사용하지 않는 데이터도 같이 반환받게 됨. 리소스 낭비
    name만 반환하는 api 또 만든다면 위에 설명처럼 비슷하지만 endpoint가 다른 api 파생되는 것임.

### Under-fetching
    쇼핑몰 서비스의 경우, 로그인한 사용자 장바구니 정보 보여준다고 가정, 여러 API 호출하게 됨.
    /user/1/
    /cart/
    /notification/
    /wish/

### Graphql
     * Graphql로 위와 같은 문제 해결가능 
     * Graphql은 한 query에서 정확하게 원하는 정보만 받을 수 있다 !
     * Graphql의 Playground : 내 데이터베이스를 테스트하게 해주는 것 
     * nodemon으로 실행 시 javascript가 변경되는건 재시작되지만 graphql파일 변경되면 재시작안함.
     * graphql server 요청받음 -> 서버가 Query, mutation 정의 발견 -> resolvers 해당 함수 실행
     * Query, mutation는 url 같은 것, 
     * graphql은 Operation(질문)에서(Ouery) 데이터가 어떻게 보일 지 정의하고 Operation을 해결하는 함수를 (resolver) 만드는 것이 요점이다. resolvers는 어떤 것도 될 수 있다.
     * Query = select, Mutation은 database 상태가 변할 때 사용되는 것.(insert,delete,update)
**단점, 캐싱기능 구현복잡, 요청이 text로 가서 File전송 등 구현하기 어려움**

