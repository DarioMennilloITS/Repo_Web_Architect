/* ============================================
   Exercise: Closure & Lexical Scoping
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Closure exercise loaded!');

    // ═══════════════════════════════════════════════════════════
    // EXAMPLE 1: Basic Closure Demo (Console only)
    // ═══════════════════════════════════════════════════════════
    
    function esterna() {
        let saluto = "Ciao, come stai?";
        
        function interna() {
            console.log(saluto);
        }
        return interna;
    }

    let miaClosure = esterna();
    miaClosure(); // Output: "Ciao, come stai?"

    // ═══════════════════════════════════════════════════════════
    // EXAMPLE 2: Simple Counter Closure (Console only)
    // ═══════════════════════════════════════════════════════════

    function createSimpleCounter() {
        let counter = 0;

        function addCount() {
            counter++;
            return counter;
        }
        return addCount;
    }

    let countClosure = createSimpleCounter();
    console.log('Simple Counter:', countClosure()); // 1
    console.log('Simple Counter:', countClosure()); // 2
    console.log('Simple Counter:', countClosure()); // 3

    // ═══════════════════════════════════════════════════════════
    // EXAMPLE 3: Function Factory - Multiplier
    // ═══════════════════════════════════════════════════════════

    function multiplier(factor) {
        return function(number) {
            return number * factor;
        };
    }

    let double = multiplier(2);
    let triple = multiplier(3);

    console.log('Double 5:', double(5));   // 10
    console.log('Triple 9:', triple(9));   // 27

    // ═══════════════════════════════════════════════════════════
    // EXAMPLE 4: Object-returning Counter with Methods
    // ═══════════════════════════════════════════════════════════

    function anotherCounter() {
        let myCounter = 0;

        return {
            increment: function() {
                myCounter++;
                return myCounter;
            },
            decrease: function() {
                myCounter--;
                return myCounter;
            },
            readValue: function() {
                return myCounter;
            }
        };
    }

    let newCounter = anotherCounter();
    newCounter.increment();
    newCounter.increment();
    newCounter.increment();
    console.log('Object Counter after 3 increments:', newCounter.readValue()); // 3

    // ═══════════════════════════════════════════════════════════
    // INTERACTIVE DEMO 1: Private Counter with UI
    // ═══════════════════════════════════════════════════════════

    function createPrivateCounter() {
        let count = 0;

        return {
            increment: function() {
                count++;
                return count;
            },
            decrement: function() {
                count--;
                return count;
            },
            reset: function() {
                count = 0;
                return count;
            },
            getValue: function() {
                return count;
            }
        };
    }

    const privateCounter = createPrivateCounter();
    const counterDisplay = document.getElementById('privateCounter');
    const incBtn = document.getElementById('incBtn');
    const decBtn = document.getElementById('decBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateCounterDisplay() {
        counterDisplay.textContent = privateCounter.getValue();
    }

    if (incBtn) {
        incBtn.addEventListener('click', function() {
            privateCounter.increment();
            updateCounterDisplay();
        });
    }

    if (decBtn) {
        decBtn.addEventListener('click', function() {
            privateCounter.decrement();
            updateCounterDisplay();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            privateCounter.reset();
            updateCounterDisplay();
        });
    }

    // ═══════════════════════════════════════════════════════════
    // INTERACTIVE DEMO 2: Function Factory with UI
    // ═══════════════════════════════════════════════════════════

    function createMultiplier(factor) {
        return function(number) {
            return number * factor;
        };
    }

    const doubler = createMultiplier(2);
    const tripler = createMultiplier(3);

    const doubleInput = document.getElementById('doubleInput');
    const doubleBtn = document.getElementById('doubleBtn');
    const doubleResult = document.getElementById('doubleResult');

    const tripleInput = document.getElementById('tripleInput');
    const tripleBtn = document.getElementById('tripleBtn');
    const tripleResult = document.getElementById('tripleResult');

    if (doubleBtn) {
        doubleBtn.addEventListener('click', function() {
            const val = parseFloat(doubleInput.value) || 0;
            const result = doubler(val);
            doubleResult.textContent = `${val} × 2 = ${result}`;
        });
    }

    if (tripleBtn) {
        tripleBtn.addEventListener('click', function() {
            const val = parseFloat(tripleInput.value) || 0;
            const result = tripler(val);
            tripleResult.textContent = `${val} × 3 = ${result}`;
        });
    }

    // ═══════════════════════════════════════════════════════════
    // INTERACTIVE DEMO 3: Bank Account with Private State
    // ═══════════════════════════════════════════════════════════

    function createBankAccount(initialBalance) {
        let balance = initialBalance || 0;
        let transactions = [];

        return {
            deposit: function(amount) {
                if (amount > 0) {
                    balance += amount;
                    transactions.push({ type: 'DEPOSIT', amount: amount, date: new Date().toLocaleTimeString() });
                    return { success: true, balance: balance };
                }
                return { success: false, error: 'Importo non valido' };
            },
            withdraw: function(amount) {
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    transactions.push({ type: 'WITHDRAW', amount: amount, date: new Date().toLocaleTimeString() });
                    return { success: true, balance: balance };
                }
                if (amount > balance) {
                    return { success: false, error: 'Fondi insufficienti' };
                }
                return { success: false, error: 'Importo non valido' };
            },
            getBalance: function() {
                return balance;
            },
            getTransactions: function() {
                return transactions.slice(-5); // Last 5 transactions
            }
        };
    }

    const account = createBankAccount(1000);
    const balanceDisplay = document.getElementById('bankBalance');
    const transactionAmount = document.getElementById('transactionAmount');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const transactionLog = document.getElementById('transactionLog');

    function updateAccountDisplay() {
        if (balanceDisplay) {
            balanceDisplay.textContent = `$ ${account.getBalance()}`;
        }
        if (transactionLog) {
            const transactions = account.getTransactions();
            if (transactions.length === 0) {
                transactionLog.textContent = '[ Nessuna transazione ]';
            } else {
                transactionLog.innerHTML = transactions.map(t => 
                    `[${t.date}] ${t.type}: $${t.amount}`
                ).join('\n');
            }
        }
    }

    if (depositBtn) {
        depositBtn.addEventListener('click', function() {
            const amount = parseFloat(transactionAmount.value) || 0;
            const result = account.deposit(amount);
            if (result.success) {
                updateAccountDisplay();
            } else {
                alert(result.error);
            }
        });
    }

    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', function() {
            const amount = parseFloat(transactionAmount.value) || 0;
            const result = account.withdraw(amount);
            if (result.success) {
                updateAccountDisplay();
            } else {
                alert(result.error);
            }
        });
    }

    // Initialize displays
    updateCounterDisplay();
    updateAccountDisplay();

    // ═══════════════════════════════════════════════════════════
    // Additional Console Demonstrations
    // ═══════════════════════════════════════════════════════════

    console.log('\n=== Closure Demonstrations ===\n');

    // Demonstrate that each closure is independent
    const counterA = createSimpleCounter();
    const counterB = createSimpleCounter();

    console.log('Counter A:', counterA()); // 1
    console.log('Counter A:', counterA()); // 2
    console.log('Counter B:', counterB()); // 1 (independent!)
    console.log('Counter A:', counterA()); // 3

    console.log('\n=== Private Bank Account Demo ===');
    const myAccount = createBankAccount(500);
    console.log('Initial balance:', myAccount.getBalance()); // 500
    myAccount.deposit(200);
    console.log('After deposit:', myAccount.getBalance()); // 700
    myAccount.withdraw(100);
    console.log('After withdrawal:', myAccount.getBalance()); // 600
    console.log('Transactions:', myAccount.getTransactions());
    // Note: balance variable is completely inaccessible from outside!

});
