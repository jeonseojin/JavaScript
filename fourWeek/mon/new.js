//  과제1) 함수 두 개로 동일한 객체 만들기
let obj ={};
function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert( a == b ); // true

/* 과제2) 계산기 만들기 
    - read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장
    - sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환
    - mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/
function Calculator() {
    this.read = function(){
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    };
    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*  누산기 만들기 : 생성자 함수 Accumulator(startingValue)를 만들기
        - 프로퍼티 value에 현재 값(current value)을 저장, 최초  호출 시엔 생성자 함수의 인수 startingValue에서 시작값(starting value)을 받아옴
        - 메서드 read()에선 prompt함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더 해줌

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
*/
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt('더할 값을 입력하세요','');
    };
    
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);



/*  new 연산자와 생성자 함수
        
        * 생성자 함수 : 객체를 생성할 때 사용하는 함수, 기존함수에 new연산자를 붙여서 호출(함수이름 첫문자는 대문자)

                        function User(name) {
                            this.name = name;
                            this.isAdmin = false;
                        }
                        let user = new User("Jack");
                    -> new User(...)를 써서 함수를 실행
                    -> 빈 객체를 만들어 this에 할당, 함수 본문을 실행
                        this = {}; 의 빈 객체가 암시적으로 만들어짐
                    -> this에 새로운 프로퍼티를 추가해 this를 수정, this를 반환
                        this가 암시적으로 반환됨

                        alert(user.name);       -> Jack
                        alert(user.isAdmin);    -> false


                ※ new function() {...} : 재사용할 필요가 없는 복잡한 객체를 만들어야한다면, 많은 양의 코드가 필요, 이럴 때 익명 생성자 함수로 감싸주는 방식을 사용

                        let user = new function() {
                            this.name = "John";
                            this.isAdmin = false;

                            -> 사용자 객체를 만들기 위한 여러 코드. 지역 변수, 복잡한 로직, 구문 등의 다양한 코드가 여기에 들어감
                        };
                    -> 생성자 함수는 익명 함수이기 때문에 어디에도 저장되지 않음, 처음 만들 때부터 한 번만 호출할 목적으로 만들기에 재사용 불가능
                    -> 익명 생성자 함수를 이용하면 재사용은 막으면서 코드를 캡슐화 할 수 있다.

        * new.target과 생성자 함수(자주 사용되지 않음)
            
                        function User() {
                            alert(new.target);
                        }
                        User();
                    ->  "new" 없이 호출함, undefined

                        new User();
                    -> "new"를 붙여 호출함, function User { ... }

            - 함수 본문에서 new.target을 사용하면 해당 함수가 new와 함께 호출되었는지 아닌지 를 확인 가능

                        function User(name) {
                            if (!new.target) {          -> new 없이 호출해도
                                return new User(name);  -> new를 붙여줌
                            }
                            this.name = name;
                        }
                        let john = User("John");
                    -> 'new User'를 쓴 것처럼 바꿔줌

                        alert(john.name);   -> John

                    ※ 위의 방식을 사용하면 new를 붙여 함수를 호출하든 아니든 코드가 동일하게 동작하기 때문에 좀 더 유연하게 코드를 작성
                       그런데 new를 생략하면 코드가 정확히 무슨 일을 하는지 알기 어렵, new가 붙어있으면 새로운 객체를 만든다는 걸 누구나 알
                       수 있는 반면 위의 경우는 정말 필요한 경우를 제외하고 사용하지 않는다.

        * 생성자와 return문
            - 생성자 함수엔 보통 return문이 없음, 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로
              작성할 필요가 없다.
            
            ※ 만약 return 문이 사용되면 아래와 같은 간단한 규칙이 적용된다
                - 객체를 return한다면, this 대신 객체가 반환
                    (return 뒤에 객체가 오면 생성자 함수는 해당 객체를 반환,return은 this를 무시하고 객체를 반환)
                - 원시형을 return한다면, return문이 무시()

                        function BigUser() {
                            this.name = "John";
                            * return { name: "Godzilla" };  <-- this가 아닌 새로운 객체를 반환함
                            * return;   <-- this를 반환함
                        }
                        alert( new BigUser().name );

            ※ 괄호 생략 : 이순가 없는 생성자 함수는 괄호를 생략해 호출할 수 있다.
                    let user = new User(); -> let user = new User; (좋은 스타일은 아님)

        * 생성자 내 메서드 
            - 생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성, 지금까지 this에 프로퍼티를 더해주는 예시만 봤다면,
              메서드를 더해주는 것도 가능
            
                -> new User(name)는 프로퍼티 name과 메서드 sayHi를 가진 객체를 만듬
                        function User(name) {
                            this.name = name;
                            this.sayHi = function() {
                                alert( "My name is: " + this.name );
                            };
                        }

                        let john = new User("John");
                        john.sayHi();
                    -> My name is: John

        ※ 요약
            - 생성자 함수(짧게 줄여서 생성자)는 일반 함수, 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 씀
            - 생성자 함수는 반드시 new 연산자와 함께 호출, new와 함께 호출하면 내부에서 this가 암시적으로 만들어지고 마지막엔 this가 반환

            * 유사한 객체를 여러 개 만들 때 생성자 함수가 유용
                        



*/