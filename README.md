# movieql
Movie API with Graphql

### REST API
    REST API�� ��� resource���� �ϳ��� endpoint�� �����ϰ� ����� endpoint(:�⺻������ ���� �Ǵ� ������ URL)�� resource�� ���õ� ���븸 �����ϰ� �ϴ� ��. ��� resource�� �Ϲ������� http �������̽��� GET, POST, PUT, DELETE 4���� �޼ҵ�� ���� �Ǿ����. 

        ** API : �� �ý��� ���� ����� ����ϴ� ��ü �������� ����. ������ ���ؼ� Ÿ�� ���� ��ü�� ���� ���� �������̽� �� �� �ִ� ���α׷��� �ۼ��� �� �ֵ����ϴ� ���.
        
        ** endpoint : �� �ý����� ��ȣ �ۿ��� �� ��� ä���� ���� ���Դϴ�. API�� ��û�� ������ ��ġ�� ������ �߻��ϴ� ��ġ. ��, API�� ������ ���ҽ��� �׼��� �� �� �ֵ����ϴ� URL.  

    endpoint : /user
    GET /user
    POST /user
    DELETE /user
    PUT /user

    REST API�� �Ѱ��� : REST API�� ���� ȯ�濡�� �ʿ��� �������� Resource ���� Endpoint�� ������ �����ϴ� �� ����� ��������� Endpoint�� �ٸ� API�� ���� �Ļ���. Over-fetching, Under-fetching

### Over-fetching
    ���� ��� ����ڵ����� ��ȸ�ϴ� /user endpoint�� �ִ�. �� �� ����� ��ȣ 1�� ������ ��ȸ
    /GET /user/1/
    no, name, age, ..., ���� ��ȯ��.
    �׷��� �ʿ��Ѱ� name�� �ʿ� name�� ��ȯ�ϴ� API ���� ���, ������� �ʴ� �����͵� ���� ��ȯ�ް� ��. ���ҽ� ����
    name�� ��ȯ�ϴ� api �� ����ٸ� ���� ����ó�� ��������� endpoint�� �ٸ� api �Ļ��Ǵ� ����.

### Under-fetching
    ���θ� ������ ���, �α����� ����� ��ٱ��� ���� �����شٰ� ����, ���� API ȣ���ϰ� ��.
    /user/1/
    /cart/
    /notification/
    /wish/

### GraphQL
     * Graphql�� ���� ���� ���� �ذᰡ�� 
     * Graphql�� �� query���� ��Ȯ�ϰ� ���ϴ� ������ ���� �� �ִ� !
     * Graphql�� Playground : �� �����ͺ��̽��� �׽�Ʈ�ϰ� ���ִ� �� 
     * nodemon���� ���� �� javascript�� ����Ǵ°� ����۵����� graphql���� ����Ǹ� ����۾���.
     * graphql server ��û���� -> ������ Query, mutation ���� �߰� -> resolvers �ش� �Լ� ����
     * Query, mutation�� url ���� ��, 
     * graphql�� Operation(����)����(Ouery) �����Ͱ� ��� ���� �� �����ϰ� Operation�� �ذ��ϴ� �Լ��� (resolver) ����� ���� �����̴�. resolvers�� � �͵� �� �� �ִ�.
     * Query = select, Mutation�� database ���°� ���� �� ���Ǵ� ��.(insert,delete,update)
**����, ĳ�̱�� ��������, ��û�� text�� ���� File���� �� �����ϱ� �����**

