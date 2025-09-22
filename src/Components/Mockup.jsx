import React from 'react'

const Mockup = () => {
  return (


    <div class="app-container">
        <div class="app-header">
            <h1>💰 Complete Personal Finance Tracker</h1>
            <p>See how all pages work together - Click the tabs below to explore each page</p>
        </div>

        <div class="page-switcher">
            <button class="page-tab active" onclick="showPage('dashboard')">🏠 Dashboard</button>
            <button class="page-tab" onclick="showPage('transactions')">💳 Transactions</button>
            <button class="page-tab" onclick="showPage('add-transaction')">➕ Add Transaction</button>
            <button class="page-tab" onclick="showPage('reports')">📊 Reports</button>
            <button class="page-tab" onclick="showPage('budget')">🎯 Budget</button>
            <button class="page-tab" onclick="showPage('settings')">⚙️ Settings</button>
        </div>

        <!-- Dashboard Page -->
        <div id="dashboard" class="page-content active">
            <div class="page-description">
                <h3>🏠 Dashboard - Your Financial Overview</h3>
                <p><strong>Purpose:</strong> Quick snapshot of your financial health. Shows total balance, monthly income/expenses, recent transactions, and spending trends. This is your landing page after login.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab active">Dashboard</button>
                        <button class="nav-tab">Transactions</button>
                        <button class="nav-tab">Reports</button>
                        <button class="nav-tab">Budget</button>
                        <button class="nav-tab">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">$2,450</div>
                            <div class="stat-label">Total Balance</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">$1,200</div>
                            <div class="stat-label">This Month Income</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">$850</div>
                            <div class="stat-label">This Month Expenses</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">$350</div>
                            <div class="stat-label">Monthly Savings</div>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="section-header">
                            <h3>Spending Trend</h3>
                        </div>
                        <div class="section-body">
                            <div class="chart-placeholder">📈 Line Chart: Last 6 Months Spending</div>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="section-header">
                            <h3>Recent Transactions</h3>
                            <a href="#" style="color: #4f46e5; text-decoration: none;">View All</a>
                        </div>
                        <div class="section-body">
                            <div class="transaction-item">
                                <div class="transaction-info">
                                    <div class="transaction-icon income">+</div>
                                    <div>
                                        <div style="font-weight: 500;">Salary</div>
                                        <div style="color: #64748b; font-size: 0.9rem;">Today • Payroll</div>
                                    </div>
                                </div>
                                <div class="amount-positive">+$2,500</div>
                            </div>
                            <div class="transaction-item">
                                <div class="transaction-info">
                                    <div class="transaction-icon expense">-</div>
                                    <div>
                                        <div style="font-weight: 500;">Groceries</div>
                                        <div style="color: #64748b; font-size: 0.9rem;">Yesterday • Food & Dining</div>
                                    </div>
                                </div>
                                <div class="amount-negative">-$85.50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-btn">+</button>
        </div>

        <!-- Transactions Page -->
        <div id="transactions" class="page-content">
            <div class="page-description">
                <h3>💳 Transactions - Complete Transaction History</h3>
                <p><strong>Purpose:</strong> View, filter, and manage all your transactions. Search by amount, category, date. Edit or delete transactions. Implements infinite scroll or pagination for performance.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab">Dashboard</button>
                        <button class="nav-tab active">Transactions</button>
                        <button class="nav-tab">Reports</button>
                        <button class="nav-tab">Budget</button>
                        <button class="nav-tab">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="section-card">
                        <div class="section-header">
                            <h3>All Transactions</h3>
                            <div style="display: flex; gap: 10px;">
                                <button class="btn btn-secondary">Export CSV</button>
                                <button class="btn btn-primary">Add New</button>
                            </div>
                        </div>
                        <div class="section-body">
                            <div class="filter-bar">
                                <select class="filter-item">
                                    <option>All Categories</option>
                                    <option>Food & Dining</option>
                                    <option>Transportation</option>
                                    <option>Shopping</option>
                                    <option>Bills & Utilities</option>
                                </select>
                                <select class="filter-item">
                                    <option>All Time</option>
                                    <option>This Month</option>
                                    <option>Last Month</option>
                                    <option>Last 3 Months</option>
                                </select>
                                <select class="filter-item">
                                    <option>All Types</option>
                                    <option>Income Only</option>
                                    <option>Expenses Only</option>
                                </select>
                                <input type="text" class="filter-item" placeholder="Search transactions..." style="min-width: 200px;">
                            </div>
                            <div class="transaction-item">
                                <div class="transaction-info">
                                    <div class="transaction-icon income">+</div>
                                    <div>
                                        <div style="font-weight: 500;">Monthly Salary</div>
                                        <div style="color: #64748b; font-size: 0.9rem;">Jan 15, 2024 • Payroll</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div class="amount-positive">+$2,500.00</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">
                                        <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">Edit</button> |
                                        <button style="background: none; border: none; color: #dc2626; cursor: pointer;">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="transaction-item">
                                <div class="transaction-info">
                                    <div class="transaction-icon expense">-</div>
                                    <div>
                                        <div style="font-weight: 500;">Whole Foods Market</div>
                                        <div style="color: #64748b; font-size: 0.9rem;">Jan 14, 2024 • Food & Dining</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div class="amount-negative">-$85.50</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">
                                        <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">Edit</button> |
                                        <button style="background: none; border: none; color: #dc2626; cursor: pointer;">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="transaction-item">
                                <div class="transaction-info">
                                    <div class="transaction-icon expense">-</div>
                                    <div>
                                        <div style="font-weight: 500;">Netflix Subscription</div>
                                        <div style="color: #64748b; font-size: 0.9rem;">Jan 13, 2024 • Entertainment</div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div class="amount-negative">-$15.99</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">
                                        <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">Edit</button> |
                                        <button style="background: none; border: none; color: #dc2626; cursor: pointer;">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div style="text-align: center; padding: 20px; color: #64748b;">
                                <button class="btn btn-secondary">Load More Transactions</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-btn">+</button>
        </div>

        <!-- Add Transaction Page -->
        <div id="add-transaction" class="page-content">
            <div class="page-description">
                <h3>➕ Add Transaction - Create New Financial Entry</h3>
                <p><strong>Purpose:</strong> Form to add new income or expense. Includes validation, category selection, date picker. This is where you'll practice form management with useReducer and custom hooks.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab">Dashboard</button>
                        <button class="nav-tab">Transactions</button>
                        <button class="nav-tab">Reports</button>
                        <button class="nav-tab">Budget</button>
                        <button class="nav-tab">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="section-card">
                        <div class="section-header">
                            <h3>Add New Transaction</h3>
                            <button style="background: none; border: none; color: #64748b; cursor: pointer;">✕</button>
                        </div>
                        <div class="section-body">
                            <form>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                                    <div>
                                        <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid #4f46e5; border-radius: 8px; background: #f0f9ff; cursor: pointer;">
                                            <input type="radio" name="type" value="income" checked>
                                            <span style="color: #059669; font-weight: 500;">💰 Income</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label style="display: flex; align-items: center; gap: 10px; padding: 15px; border: 2px solid #e2e8f0; border-radius: 8px; cursor: pointer;">
                                            <input type="radio" name="type" value="expense">
                                            <span style="color: #dc2626; font-weight: 500;">💸 Expense</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Amount *</label>
                                    <div style="position: relative;">
                                        <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #64748b;">$</span>
                                        <input type="number" class="form-input" placeholder="0.00" style="padding-left: 35px;" step="0.01" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Description *</label>
                                    <input type="text" class="form-input" placeholder="e.g., Salary, Groceries, Gas..." required>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                    <div class="form-group">
                                        <label class="form-label">Category *</label>
                                        <select class="form-input" required>
                                            <option value="">Select category</option>
                                            <option value="salary">💼 Salary</option>
                                            <option value="freelance">💻 Freelance</option>
                                            <option value="investment">📈 Investment</option>
                                            <option value="food">🍕 Food & Dining</option>
                                            <option value="transport">🚗 Transportation</option>
                                            <option value="shopping">🛍️ Shopping</option>
                                            <option value="bills">🏠 Bills & Utilities</option>
                                            <option value="entertainment">🎬 Entertainment</option>
                                            <option value="health">⚕️ Healthcare</option>
                                            <option value="other">📝 Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Date</label>
                                        <input type="date" class="form-input" value="2024-01-15">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Notes (Optional)</label>
                                    <textarea class="form-input" rows="3" placeholder="Additional details about this transaction..."></textarea>
                                </div>

                                <div style="display: flex; gap: 15px; margin-top: 30px;">
                                    <button type="submit" class="btn btn-primary" style="flex: 1;">Save Transaction</button>
                                    <button type="button" class="btn btn-secondary">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Reports Page -->
        <div id="reports" class="page-content">
            <div class="page-description">
                <h3>📊 Reports - Financial Analytics & Insights</h3>
                <p><strong>Purpose:</strong> Visual charts and analytics. Monthly/yearly comparisons, category breakdowns, spending trends. Great place to implement chart libraries and data visualization.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab">Dashboard</button>
                        <button class="nav-tab">Transactions</button>
                        <button class="nav-tab active">Reports</button>
                        <button class="nav-tab">Budget</button>
                        <button class="nav-tab">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="filter-bar">
                        <select class="filter-item">
                            <option>This Year</option>
                            <option>Last Year</option>
                            <option>Last 6 Months</option>
                            <option>Custom Range</option>
                        </select>
                        <button class="btn btn-secondary">Export Report</button>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                        <div class="section-card">
                            <div class="section-header">
                                <h3>Monthly Income vs Expenses</h3>
                            </div>
                            <div class="section-body">
                                <div class="chart-placeholder">📊 Bar Chart: Monthly Comparison</div>
                                <div style="display: flex; justify-content: space-between; margin-top: 15px; font-size: 0.9rem; color: #64748b;">
                                    <span>Avg Income: <strong style="color: #059669;">$2,400</strong></span>
                                    <span>Avg Expenses: <strong style="color: #dc2626;">$1,850</strong></span>
                                </div>
                            </div>
                        </div>

                        <div class="section-card">
                            <div class="section-header">
                                <h3>Spending by Category</h3>
                            </div>
                            <div class="section-body">
                                <div class="chart-placeholder">🥧 Pie Chart: Category Breakdown</div>
                                <div style="margin-top: 15px;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.9rem;">🍕 Food & Dining</span>
                                        <strong>$450 (35%)</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.9rem;">🚗 Transportation</span>
                                        <strong>$280 (22%)</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.9rem;">🏠 Bills & Utilities</span>
                                        <strong>$320 (25%)</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>Spending Trends</h3>
                        </div>
                        <div class="section-body">
                            <div class="chart-placeholder">📈 Line Chart: 12-Month Spending Trend</div>
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 20px;">
                                <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">$550</div>
                                    <div style="font-size: 0.9rem; color: #64748b;">Highest Month</div>
                                </div>
                                <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">$1,200</div>
                                    <div style="font-size: 0.9rem; color: #64748b;">Lowest Month</div>
                                </div>
                                <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #4f46e5;">$1,850</div>
                                    <div style="font-size: 0.9rem; color: #64748b;">Average</div>
                                </div>
                                <div style="text-align: center; padding: 15px; background: #f8fafc; border-radius: 8px;">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">↗ 12%</div>
                                    <div style="font-size: 0.9rem; color: #64748b;">Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-btn">+</button>
        </div>

        <!-- Budget Page -->
        <div id="budget" class="page-content">
            <div class="page-description">
                <h3>🎯 Budget - Set & Track Spending Goals</h3>
                <p><strong>Purpose:</strong> Create monthly budgets for each category, track progress with visual indicators, get alerts when approaching limits. Perfect for complex state management with useReducer.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab">Dashboard</button>
                        <button class="nav-tab">Transactions</button>
                        <button class="nav-tab">Reports</button>
                        <button class="nav-tab active">Budget</button>
                        <button class="nav-tab">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 30px;">
                        <div class="stat-card">
                            <div class="stat-value">$2,000</div>
                            <div class="stat-label">Total Budget</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #059669, #047857);">
                            <div class="stat-value">$1,150</div>
                            <div class="stat-label">Spent</div>
                        </div>
                        <div class="stat-card" style="background: linear-gradient(135deg, #dc2626, #b91c1c);">
                            <div class="stat-value">$850</div>
                            <div class="stat-label">Remaining</div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>January 2024 Budget</h3>
                            <button class="btn btn-primary">Add Category</button>
                        </div>
                        <div class="section-body">
                            <div class="budget-item">
                                <div style="flex: 1;">
                                    <div class="budget-info">
                                        <h4>🍕 Food & Dining</h4>
                                        <div style="color: #64748b; font-size: 0.9rem;">$450 of $500 spent</div>
                                        <div class="budget-progress">
                                            <div class="budget-progress-bar" style="width: 90%; background: linear-gradient(90deg, #f59e0b, #d97706);"></div>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 1.2rem; font-weight: bold; color: #f59e0b;">90%</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">⚠️ Near limit</div>
                                </div>
                            </div>

                            <div class="budget-item">
                                <div style="flex: 1;">
                                    <div class="budget-info">
                                        <h4>🚗 Transportation</h4>
                                        <div style="color: #64748b; font-size: 0.9rem;">$180 of $300 spent</div>
                                        <div class="budget-progress">
                                            <div class="budget-progress-bar" style="width: 60%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 1.2rem; font-weight: bold; color: #4f46e5;">60%</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">✅ On track</div>
                                </div>
                            </div>

                            <div class="budget-item">
                                <div style="flex: 1;">
                                    <div class="budget-info">
                                        <h4>🏠 Bills & Utilities</h4>
                                        <div style="color: #64748b; font-size: 0.9rem;">$320 of $400 spent</div>
                                        <div class="budget-progress">
                                            <div class="budget-progress-bar" style="width: 80%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 1.2rem; font-weight: bold; color: #4f46e5;">80%</div>
                                    <div style="font-size: 0.8rem; color: #64748b;">✅ Good</div>
                                </div>
                            </div>

                            <div class="budget-item">
                                <div style="flex: 1;">
                                    <div class="budget-info">
                                        <h4>🎬 Entertainment</h4>
                                        <div style="color: #64748b; font-size: 0.9rem;">$200 of $150 spent</div>
                                        <div class="budget-progress">
                                            <div class="budget-progress-bar" style="width: 100%; background: linear-gradient(90deg, #dc2626, #b91c1c);"></div>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 1.2rem; font-weight: bold; color: #dc2626;">133%</div>
                                    <div style="font-size: 0.8rem; color: #dc2626;">🚨 Over budget</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>Budget Alerts</h3>
                        </div>
                        <div class="section-body">
                            <div style="background: #fee2e2; border: 1px solid #fecaca; border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                                <div style="color: #dc2626; font-weight: 500;">🚨 Over Budget Alert</div>
                                <div style="color: #7f1d1d; font-size: 0.9rem;">Entertainment spending is 133% of your budget limit.</div>
                            </div>
                            <div style="background: #fef3c7; border: 1px solid #fed7aa; border-radius: 8px; padding: 15px;">
                                <div style="color: #d97706; font-weight: 500;">⚠️ Near Limit Warning</div>
                                <div style="color: #92400e; font-size: 0.9rem;">Food & Dining is at 90% of your budget. $50 remaining.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-btn">+</button>
        </div>

        <!-- Settings Page -->
        <div id="settings" class="page-content">
            <div class="page-description">
                <h3>⚙️ Settings - App Configuration & Preferences</h3>
                <p><strong>Purpose:</strong> User preferences, theme switching, data export/import, account settings. Great for practicing localStorage with custom hooks and theme management.</p>
            </div>
            <div class="device-mockup">
                <div class="app-nav">
                    <div class="logo">💰 FinanceTracker</div>
                    <div class="user-profile">
                        <span>John Doe</span>
                        <div class="avatar">JD</div>
                    </div>
                </div>
                <div class="nav-section">
                    <div class="nav-tabs">
                        <button class="nav-tab">Dashboard</button>
                        <button class="nav-tab">Transactions</button>
                        <button class="nav-tab">Reports</button>
                        <button class="nav-tab">Budget</button>
                        <button class="nav-tab active">Settings</button>
                    </div>
                </div>
                <div class="main-content">
                    <div class="section-card">
                        <div class="section-header">
                            <h3>Appearance</h3>
                        </div>
                        <div class="section-body">
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Dark Mode</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Switch between light and dark themes</div>
                                </div>
                                <div class="toggle"></div>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Currency</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Choose your preferred currency</div>
                                </div>
                                <select style="padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                    <option>JPY (¥)</option>
                                </select>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Language</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Select your preferred language</div>
                                </div>
                                <select style="padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>Notifications</h3>
                        </div>
                        <div class="section-body">
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Budget Alerts</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Get notified when approaching budget limits</div>
                                </div>
                                <div class="toggle active"></div>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Monthly Reports</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Receive monthly spending summaries</div>
                                </div>
                                <div class="toggle active"></div>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Transaction Reminders</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Remind to log recurring transactions</div>
                                </div>
                                <div class="toggle"></div>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>Data Management</h3>
                        </div>
                        <div class="section-body">
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Export Data</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Download your financial data as CSV or JSON</div>
                                </div>
                                <div style="display: flex; gap: 10px;">
                                    <button class="btn btn-secondary" style="padding: 8px 16px;">Export CSV</button>
                                    <button class="btn btn-secondary" style="padding: 8px 16px;">Export JSON</button>
                                </div>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Import Data</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Upload financial data from CSV file</div>
                                </div>
                                <button class="btn btn-primary" style="padding: 8px 16px;">Import CSV</button>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Clear All Data</div>
                                    <div style="color: #dc2626; font-size: 0.9rem;">⚠️ This will permanently delete all your data</div>
                                </div>
                                <button class="btn" style="background: #dc2626; color: white; padding: 8px 16px;">Clear Data</button>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="section-header">
                            <h3>Account</h3>
                        </div>
                        <div class="section-body">
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Profile Information</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Update your name and email</div>
                                </div>
                                <button class="btn btn-secondary" style="padding: 8px 16px;">Edit Profile</button>
                            </div>
                            <div class="settings-item">
                                <div>
                                    <div style="font-weight: 500;">Change Password</div>
                                    <div style="color: #64748b; font-size: 0.9rem;">Update your account password</div>
                                </div>
                                <button class="btn btn-secondary" style="padding: 8px 16px;">Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- App Flow Explanation -->
        <div class="flow-diagram">
            <h3 style="color: #01579b; margin-bottom: 15px;">🔄 How The App Works - Complete User Journey</h3>
            <p style="color: #0277bd; line-height: 1.6; margin-bottom: 20px;">
                Understanding the complete flow helps you see how React Router, useReducer, and custom hooks work together to create a seamless experience.
            </p>
            
            <div class="flow-steps">
                <div class="flow-step">
                    <h4>1. 🏠 Dashboard Landing</h4>
                    <p>User sees financial overview, recent transactions, and quick stats. Links lead to other sections.</p>
                </div>
                
                <div class="flow-step">
                    <h4>2. ➕ Add Transaction</h4>
                    <p>Form with validation. Updates global state via useReducer. Returns to dashboard with success message.</p>
                </div>
                
                <div class="flow-step">
                    <h4>3. 💳 View All Transactions</h4>
                    <p>Paginated list with filters. Edit/delete actions update state. Search functionality with custom hooks.</p>
                </div>
                
                <div class="flow-step">
                    <h4>4. 📊 Analytics & Reports</h4>
                    <p>Charts consume transaction data from global state. Filter by date ranges. Export functionality.</p>
                </div>
                
                <div class="flow-step">
                    <h4>5. 🎯 Budget Management</h4>
                    <p>Set spending limits. Visual progress tracking. Alert system when limits are exceeded.</p>
                </div>
                
                <div class="flow-step">
                    <h4>6. ⚙️ Settings & Preferences</h4>
                    <p>Theme switching, data export/import, user preferences stored in localStorage via custom hooks.</p>
                </div>
            </div>

            <div style="background: white; border-radius: 8px; padding: 20px; margin-top: 20px;">
                <h4 style="color: #01579b; margin-bottom: 10px;">🧠 Learning Concepts Applied:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; color: #0277bd;">
                    <div><strong>React Router:</strong> Navigation between all pages</div>
                    <div><strong>useReducer:</strong> Complex transaction & budget state</div>
                    <div><strong>Custom Hooks:</strong> useLocalStorage, useAPI, useForm</div>
                    <div><strong>TypeScript:</strong> Type safety for all data models</div>
                    <div><strong>Performance:</strong> Lazy loading, memoization, virtual scrolling</div>
                    <div><strong>Responsive Design:</strong> Works perfectly on all devices</div>
                </div>
            </div>
        </div>
        

    </div>
    import React, { useState, useReducer, createContext, useContext, useEffect } from 'react';
import { PlusCircle, Home, CreditCard, BarChart3, Target, Settings, Menu, X, Download, Upload, Trash2, Edit, Filter, Search } from 'lucide-react';

// Types
type TransactionType = 'income' | 'expense';
type DeviceType = 'desktop' | 'tablet' | 'mobile';

interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  date: string;
  notes?: string;
}

interface BudgetItem {
  id: string;
  category: string;
  limit: number;
  spent: number;
  icon: string;
}

interface AppState {
  transactions: Transaction[];
  budgets: BudgetItem[];
  settings: {
    darkMode: boolean;
    currency: string;
    language: string;
    notifications: {
      budgetAlerts: boolean;
      monthlyReports: boolean;
      transactionReminders: boolean;
    };
  };
}

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  deviceType: DeviceType;
  setDeviceType: (device: DeviceType) => void;
}>({} as any);

// Reducer
const appReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(t => 
          t.id === action.payload.id ? action.payload : t
        )
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload)
      };
    case 'UPDATE_BUDGET':
      return {
        ...state,
        budgets: state.budgets.map(b => 
          b.id === action.payload.id ? action.payload : b
        )
      };
    case 'TOGGLE_SETTING':
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.key]: action.payload.value
        }
      };
    case 'TOGGLE_NOTIFICATION':
      return {
        ...state,
        settings: {
          ...state.settings,
          notifications: {
            ...state.settings.notifications,
            [action.payload.key]: action.payload.value
          }
        }
      };
    default:
      return state;
  }
};

// Initial state with comprehensive sample data
const initialState: AppState = {
  transactions: [
    {
      id: '1',
      amount: 2500,
      description: 'Monthly Salary',
      category: 'salary',
      type: 'income',
      date: '2024-01-15',
      notes: 'Regular monthly paycheck from tech company'
    },
    {
      id: '2',
      amount: 85.50,
      description: 'Whole Foods Market',
      category: 'food',
      type: 'expense',
      date: '2024-01-14',
      notes: 'Weekly grocery shopping'
    },
    {
      id: '3',
      amount: 15.99,
      description: 'Netflix Subscription',
      category: 'entertainment',
      type: 'expense',
      date: '2024-01-13'
    },
    {
      id: '4',
      amount: 45.00,
      description: 'Shell Gas Station',
      category: 'transport',
      type: 'expense',
      date: '2024-01-12'
    },
    {
      id: '5',
      amount: 120.00,
      description: 'Electricity Bill',
      category: 'bills',
      type: 'expense',
      date: '2024-01-10'
    },
    {
      id: '6',
      amount: 350.00,
      description: 'Freelance Project',
      category: 'freelance',
      type: 'income',
      date: '2024-01-08'
    }
  ],
  budgets: [
    { id: '1', category: 'Food & Dining', limit: 500, spent: 450, icon: '🍕' },
    { id: '2', category: 'Transportation', limit: 300, spent: 180, icon: '🚗' },
    { id: '3', category: 'Bills & Utilities', limit: 400, spent: 320, icon: '🏠' },
    { id: '4', category: 'Entertainment', limit: 150, spent: 200, icon: '🎬' },
    { id: '5', category: 'Shopping', limit: 200, spent: 95, icon: '🛍️' },
    { id: '6', category: 'Healthcare', limit: 100, spent: 0, icon: '⚕️' }
  ],
  settings: {
    darkMode: false,
    currency: 'USD',
    language: 'English',
    notifications: {
      budgetAlerts: true,
      monthlyReports: true,
      transactionReminders: false
    }
  }
};

// Category options - exactly matching the original
const categories = {
  income: [
    { value: 'salary', label: '💼 Salary' },
    { value: 'freelance', label: '💻 Freelance' },
    { value: 'investment', label: '📈 Investment' },
    { value: 'other', label: '📝 Other' }
  ],
  expense: [
    { value: 'food', label: '🍕 Food & Dining' },
    { value: 'transport', label: '🚗 Transportation' },
    { value: 'shopping', label: '🛍️ Shopping' },
    { value: 'bills', label: '🏠 Bills & Utilities' },
    { value: 'entertainment', label: '🎬 Entertainment' },
    { value: 'health', label: '⚕️ Healthcare' },
    { value: 'other', label: '📝 Other' }
  ]
};

// Custom hooks
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Main App Header with device mockup styling
const AppHeader = () => {
  const { currentPage, setCurrentPage, deviceType, setDeviceType } = useAppContext();
  
  const pages = [
    { id: 'dashboard', label: '🏠 Dashboard', icon: '🏠' },
    { id: 'transactions', label: '💳 Transactions', icon: '💳' },
    { id: 'add-transaction', label: '➕ Add Transaction', icon: '➕' },
    { id: 'reports', label: '📊 Reports', icon: '📊' },
    { id: 'budget', label: '🎯 Budget', icon: '🎯' },
    { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
  ];

  const devices = [
    { id: 'desktop', label: '💻 Desktop', icon: '💻' },
    { id: 'tablet', label: '📱 Tablet', icon: '📱' },
    { id: 'mobile', label: '📱 Mobile', icon: '📱' }
  ];

  return (
    <div className="bg-white border-b-2 border-gray-100">
      {/* Main Title */}
      <div className="text-center py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-3">💰 Complete Personal Finance Tracker</h1>
        <p className="text-lg opacity-90">See how all pages work together - Click the tabs below to explore each page</p>
      </div>

      {/* Page Switcher */}
      <div className="py-6 bg-white">
        <div className="flex justify-center gap-3 px-4 flex-wrap">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                currentPage === page.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>

      {/* Device Selector */}
      <div className="py-4 bg-gray-50">
        <div className="flex justify-center gap-4 px-4">
          {devices.map(device => (
            <button
              key={device.id}
              onClick={() => setDeviceType(device.id as DeviceType)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                deviceType === device.id
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-600 hover:text-purple-600'
              }`}
            >
              {device.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Device Mockup Container
const DeviceMockup = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { deviceType } = useAppContext();
  
  const deviceClasses = {
    desktop: 'max-w-6xl w-full',
    tablet: 'max-w-3xl w-full',
    mobile: 'max-w-sm w-full'
  };

  return (
    <div className={`mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800 transition-all duration-500 ${deviceClasses[deviceType]} ${className}`}>
      {children}
    </div>
  );
};

// App Navigation Bar (inside mockup)
const MockupHeader = () => {
  const { currentPage, deviceType } = useAppContext();
  
  const navigation = [
    { id: 'dashboard', label: deviceType === 'mobile' ? 'Home' : 'Dashboard' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'reports', label: 'Reports' },
    { id: 'budget', label: 'Budget' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <>
      {/* Top Navigation */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            {deviceType === 'mobile' ? '💰 Finance' : '💰 FinanceTracker'}
          </div>
          <div className="flex items-center space-x-3">
            {deviceType !== 'mobile' && <span className="font-medium">John Doe</span>}
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-50 px-4 py-3">
        <div className={`flex justify-center gap-2 ${deviceType === 'mobile' ? 'gap-1' : 'gap-3'}`}>
          {navigation.map(nav => (
            <button
              key={nav.id}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm ${
                currentPage === nav.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
              } ${deviceType === 'mobile' ? 'px-2 py-1 text-xs' : ''}`}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

// Page Description Component
const PageDescription = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
    <h3 className="text-yellow-800 font-bold text-lg mb-3">{title}</h3>
    <p className="text-yellow-700 leading-relaxed">{description}</p>
  </div>
);

// Stat Card Component matching original design
const StatCard = ({ title, value, gradient = 'from-blue-500 to-indigo-600' }: { 
  title: string; 
  value: string; 
  gradient?: string;
}) => (
  <div className={`bg-gradient-to-br ${gradient} text-white p-6 rounded-xl shadow-lg`}>
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-white text-opacity-90 font-medium">{title}</div>
  </div>
);

// Transaction Item Component
const TransactionItem = ({ transaction, showActions = false }: { 
  transaction: Transaction; 
  showActions?: boolean;
}) => {
  const { dispatch, deviceType } = useAppContext();
  
  const categoryInfo = [...categories.income, ...categories.expense]
    .find(c => c.value === transaction.category);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id });
    }
  };

  return (
    <div className={`flex items-center justify-between py-4 border-b border-gray-100 ${
      deviceType === 'mobile' ? 'py-3' : ''
    }`}>
      <div className="flex items-center space-x-4">
        <div className={`rounded-full flex items-center justify-center font-bold ${
          deviceType === 'mobile' ? 'w-8 h-8 text-sm' : 'w-10 h-10'
        } ${
          transaction.type === 'income' 
            ? 'bg-green-100 text-green-600' 
            : 'bg-red-100 text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'}
        </div>
        <div>
          <div className={`font-medium ${deviceType === 'mobile' ? 'text-sm' : ''}`}>
            {transaction.description}
          </div>
          <div className={`text-gray-500 ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'}`}>
            {transaction.date} {categoryInfo && `• ${categoryInfo.label}`}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={`font-bold ${deviceType === 'mobile' ? 'text-sm' : ''} ${
          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
        </div>
        {showActions && (
          <div className="flex space-x-2 mt-1">
            <button className="text-indigo-600 hover:text-indigo-800 text-xs">
              Edit
            </button>
            <span className="text-gray-400">|</span>
            <button 
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 text-xs"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const { state, deviceType } = useAppContext();
  
  const totalBalance = state.transactions.reduce((sum, t) => 
    sum + (t.type === 'income' ? t.amount : -t.amount), 0
  );
  
  const monthlyIncome = state.transactions
    .filter(t => t.type === 'income' && new Date(t.date).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0);
    
  const monthlyExpenses = state.transactions
    .filter(t => t.type === 'expense' && new Date(t.date).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlySavings = monthlyIncome - monthlyExpenses;

  return (
    <div className={`space-y-6 ${deviceType === 'mobile' ? 'space-y-4' : ''}`}>
      {/* Stats Grid */}
      <div className={`grid gap-4 ${
        deviceType === 'desktop' 
          ? 'grid-cols-4' 
          : deviceType === 'tablet' 
          ? 'grid-cols-2' 
          : 'grid-cols-1'
      }`}>
        <StatCard 
          title="Total Balance" 
          value={`$${totalBalance.toLocaleString()}`} 
          gradient="from-indigo-500 to-purple-600" 
        />
        <StatCard 
          title={deviceType === 'mobile' ? 'Income' : 'This Month Income'} 
          value={`$${monthlyIncome.toLocaleString()}`} 
          gradient="from-green-500 to-emerald-600" 
        />
        <StatCard 
          title={deviceType === 'mobile' ? 'Expenses' : 'This Month Expenses'} 
          value={`$${monthlyExpenses.toLocaleString()}`} 
          gradient="from-red-500 to-pink-600" 
        />
        <StatCard 
          title={deviceType === 'mobile' ? 'Savings' : 'Monthly Savings'} 
          value={`$${monthlySavings.toLocaleString()}`} 
          gradient="from-blue-500 to-cyan-600" 
        />
      </div>

      {/* Charts and Transactions */}
      <div className={`grid gap-6 ${
        deviceType === 'desktop' ? 'grid-cols-3' : 'grid-cols-1'
      }`}>
        {/* Spending Trend Chart */}
        <div className={`bg-white rounded-xl shadow-lg ${
          deviceType === 'desktop' ? 'col-span-2' : ''
        }`}>
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold">
              {deviceType === 'mobile' ? 'This Month' : 'Spending Trend'}
            </h3>
          </div>
          <div className="p-6">
            <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-500 ${
              deviceType === 'mobile' ? 'h-32 text-sm' : 'h-48'
            }`}>
              📈 {deviceType === 'mobile' ? 'Mobile Chart' : 'Line Chart: Last 6 Months Spending'}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className={`font-semibold ${
              deviceType === 'mobile' ? 'text-base' : 'text-lg'
            }`}>
              Recent {deviceType === 'mobile' ? '' : 'Transactions'}
            </h3>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm">
              View All
            </button>
          </div>
          <div className={`${deviceType === 'mobile' ? 'p-4' : 'p-6'}`}>
            <div className="space-y-1">
              {state.transactions.slice(0, deviceType === 'mobile' ? 3 : 5).map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Transactions Component
const Transactions = () => {
  const { state, deviceType } = useAppContext();
  const [filter, setFilter] = useState({
    category: '',
    type: '',
    timeRange: '',
    search: ''
  });

  const filteredTransactions = state.transactions.filter(transaction => {
    if (filter.category && transaction.category !== filter.category) return false;
    if (filter.type && transaction.type !== filter.type) return false;
    if (filter.search && !transaction.description.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">All Transactions</h3>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Download size={16} />
              <span>{deviceType === 'mobile' ? 'Export' : 'Export CSV'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
              <PlusCircle size={16} />
              <span>Add New</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-3 ${deviceType === 'mobile' ? 'gap-2' : ''}`}>
          <select
            className={`border border-gray-300 rounded-lg px-3 py-2 ${
              deviceType === 'mobile' ? 'text-sm flex-1 min-w-0' : ''
            }`}
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="">All Categories</option>
            {[...categories.income, ...categories.expense].map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select
            className={`border border-gray-300 rounded-lg px-3 py-2 ${
              deviceType === 'mobile' ? 'text-sm flex-1 min-w-0' : ''
            }`}
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="income">Income Only</option>
            <option value="expense">Expenses Only</option>
          </select>

          <select
            className={`border border-gray-300 rounded-lg px-3 py-2 ${
              deviceType === 'mobile' ? 'text-sm flex-1 min-w-0' : ''
            }`}
            value={filter.timeRange}
            onChange={(e) => setFilter({ ...filter, timeRange: e.target.value })}
          >
            <option value="">All Time</option>
            <option value="month">This Month</option>
            <option value="quarter">Last 3 Months</option>
          </select>

          <input
            type="text"
            placeholder="Search transactions..."
            className={`border border-gray-300 rounded-lg px-3 py-2 ${
              deviceType === 'mobile' 
                ? 'text-sm w-full' 
                : 'min-w-48'
            }`}
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-1">
          {filteredTransactions.map(transaction => (
            <TransactionItem 
              key={transaction.id} 
              transaction={transaction} 
              showActions={true}
            />
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No transactions found matching your filters.
          </div>
        )}

        {filteredTransactions.length > 0 && (
          <div className="text-center pt-6">
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Load More Transactions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Transaction Form Component
const TransactionForm = ({ onClose }: { onClose: () => void }) => {
  const { dispatch } = useAppContext();
  const [formData, setFormData] = useState({
    type: 'expense' as TransactionType,
    amount: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const transaction: Transaction = {
      id: Date.now().toString(),
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      type: formData.type,
      date: formData.date,
      notes: formData.notes || undefined
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    onClose();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Add New Transaction</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Transaction Type Selection */}
          <div className="grid grid-cols-2 gap-4">
            <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.type === 'income' 
                ? 'border-green-500 bg-green-50 text-green-700' 
                : 'border-gray-200 hover:border-green-300'
            }`}>
              <input
                type="radio"
                name="type"
                value="income"
                checked={formData.type === 'income'}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as TransactionType, category: '' })}
                className="sr-only"
              />
              <span className="font-medium">💰 Income</span>
            </label>

            <label className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.type === 'expense' 
                ? 'border-red-500 bg-red-50 text-red-700' 
                : 'border-gray-200 hover:border-red-300'
            }`}>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={formData.type === 'expense'}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as TransactionType, category: '' })}
                className="sr-only"
              />
              <span className="font-medium">💸 Expense</span>
            </label>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
              <input
                type="number"
                step="0.01"
                required
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Salary, Groceries, Gas..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Category and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select category</option>
                {categories[formData.type].map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Additional details about this transaction..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 font-medium transition-colors"
            >
              Save Transaction
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add Transaction Page Component
const AddTransaction = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      <PageDescription 
        title="➕ Add Transaction - Create New Financial Entry" 
        description="Purpose: Form to add new income or expense. Includes validation, category selection, date picker. This is where you'll practice form management with useReducer and custom hooks."
      />
      {showForm && (
        <TransactionForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

// Reports Component
const Reports = () => {
  const { state, deviceType } = useAppContext();
  
  const monthlyIncome = state.transactions
    .filter(t => t.type === 'income' && new Date(t.date).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0);
    
  const monthlyExpenses = state.transactions
    .filter(t => t.type === 'expense' && new Date(t.date).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0);

  // Calculate category spending
  const categorySpending = state.transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <PageDescription 
        title="📊 Reports - Financial Analytics & Insights" 
        description="Purpose: Visual charts and analytics. Monthly/yearly comparisons, category breakdowns, spending trends. Great place to implement chart libraries and data visualization."
      />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Financial Reports</h2>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Download size={16} />
          <span>Export Report</span>
        </button>
      </div>

      <div className={`grid gap-6 ${deviceType === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <div className={`bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 mb-4 ${
            deviceType === 'mobile' ? 'h-48' : 'h-64'
          }`}>
            📊 Income vs Expenses Chart
          </div>
          <div className="flex justify-between text-sm">
            <span>Income: <strong className="text-green-600">${monthlyIncome.toLocaleString()}</strong></span>
            <span>Expenses: <strong className="text-red-600">${monthlyExpenses.toLocaleString()}</strong></span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
          <div className={`bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 mb-4 ${
            deviceType === 'mobile' ? 'h-48' : 'h-64'
          }`}>
            🥧 Category Breakdown Chart
          </div>
          <div className="space-y-2">
            {Object.entries(categorySpending)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 3)
              .map(([category, amount]) => {
                const categoryInfo = [...categories.income, ...categories.expense]
                  .find(c => c.value === category);
                return (
                  <div key={category} className="flex justify-between text-sm">
                    <span>{categoryInfo?.label || category}</span>
                    <strong>${amount.toLocaleString()}</strong>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Spending Trends</h3>
        <div className={`bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 mb-4 ${
          deviceType === 'mobile' ? 'h-48' : 'h-64'
        }`}>
          📈 12-Month Trend Line Chart
        </div>
        
        <div className={`grid gap-4 ${
          deviceType === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'
        }`}>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">${monthlyIncome.toLocaleString()}</div>
            <div className="text-sm text-gray-600">This Month</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">${monthlyExpenses.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Spent</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">
              ${state.transactions.filter(t => t.type === 'expense').length > 0 
                ? Math.round(monthlyExpenses / state.transactions.filter(t => t.type === 'expense').length).toLocaleString()
                : '0'}
            </div>
            <div className="text-sm text-gray-600">Avg Transaction</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              ↗ {monthlyIncome > 0 ? Math.round(((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100) : 0}%
            </div>
            <div className="text-sm text-gray-600">Savings Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Budget Component
const Budget = () => {
  const { state, dispatch, deviceType } = useAppContext();
  
  const totalBudget = state.budgets.reduce((sum, b) => sum + b.limit, 0);
  const totalSpent = state.budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  return (
    <div className="space-y-6">
      <PageDescription 
        title="🎯 Budget - Set & Track Spending Goals" 
        description="Purpose: Create monthly budgets for each category, track progress with visual indicators, get alerts when approaching limits. Perfect for complex state management with useReducer."
      />

      <div className={`grid gap-4 ${
        deviceType === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
      }`}>
        <StatCard title="Total Budget" value={`${totalBudget.toLocaleString()}`} gradient="from-blue-500 to-blue-600" />
        <StatCard title="Total Spent" value={`${totalSpent.toLocaleString()}`} gradient="from-red-500 to-red-600" />
        <StatCard title="Remaining" value={`${totalRemaining.toLocaleString()}`} gradient="from-green-500 to-green-600" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Budget Categories</h3>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add Category
          </button>
        </div>

        <div className="space-y-4">
          {state.budgets.map(budget => {
            const percentage = Math.round((budget.spent / budget.limit) * 100);
            const isOverBudget = percentage > 100;
            const isNearLimit = percentage > 80 && percentage <= 100;

            return (
              <div key={budget.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-medium">{budget.icon} {budget.category}</h4>
                    <p className="text-sm text-gray-600">
                      ${budget.spent.toLocaleString()} of ${budget.limit.toLocaleString()} spent
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      isOverBudget ? 'text-red-600' : isNearLimit ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {percentage}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {isOverBudget ? '🚨 Over budget' : isNearLimit ? '⚠️ Near limit' : '✅ On track'}
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      isOverBudget 
                        ? 'bg-red-500' 
                        : isNearLimit 
                        ? 'bg-yellow-500' 
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-3">
          <h4 className="font-medium">Budget Alerts</h4>
          {state.budgets
            .filter(b => (b.spent / b.limit) > 0.8)
            .map(budget => {
              const percentage = Math.round((budget.spent / budget.limit) * 100);
              const isOverBudget = percentage > 100;
              
              return (
                <div key={`alert-${budget.id}`} className={`p-3 rounded-lg ${
                  isOverBudget ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <div className={`font-medium ${isOverBudget ? 'text-red-800' : 'text-yellow-800'}`}>
                    {isOverBudget ? '🚨 Over Budget Alert' : '⚠️ Near Limit Warning'}
                  </div>
                  <div className={`text-sm ${isOverBudget ? 'text-red-700' : 'text-yellow-700'}`}>
                    {budget.category} is at {percentage}% of your budget limit.
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

// Settings Component
const Settings = () => {
  const { state, dispatch } = useAppContext();

  const handleToggle = (key: string, value: any) => {
    dispatch({ type: 'TOGGLE_SETTING', payload: { key, value } });
  };

  const handleNotificationToggle = (key: string, value: boolean) => {
    dispatch({ type: 'TOGGLE_NOTIFICATION', payload: { key, value } });
  };

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-indigo-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      <PageDescription 
        title="⚙️ Settings - App Configuration & Preferences" 
        description="Purpose: User preferences, theme switching, data export/import, account settings. Great for practicing localStorage with custom hooks and theme management."
      />

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Appearance</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-gray-600">Switch between light and dark themes</div>
            </div>
            <Toggle 
              checked={state.settings.darkMode} 
              onChange={(value) => handleToggle('darkMode', value)} 
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Currency</div>
              <div className="text-sm text-gray-600">Choose your preferred currency</div>
            </div>
            <select 
              className="px-3 py-2 border border-gray-300 rounded-lg"
              value={state.settings.currency}
              onChange={(e) => handleToggle('currency', e.target.value)}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Budget Alerts</div>
              <div className="text-sm text-gray-600">Get notified when approaching budget limits</div>
            </div>
            <Toggle 
              checked={state.settings.notifications.budgetAlerts} 
              onChange={(value) => handleNotificationToggle('budgetAlerts', value)} 
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Monthly Reports</div>
              <div className="text-sm text-gray-600">Receive monthly spending summaries</div>
            </div>
            <Toggle 
              checked={state.settings.notifications.monthlyReports} 
              onChange={(value) => handleNotificationToggle('monthlyReports', value)} 
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Transaction Reminders</div>
              <div className="text-sm text-gray-600">Remind to log recurring transactions</div>
            </div>
            <Toggle 
              checked={state.settings.notifications.transactionReminders} 
              onChange={(value) => handleNotificationToggle('transactionReminders', value)} 
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Data Management</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Export Data</div>
              <div className="text-sm text-gray-600">Download your financial data</div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download size={16} />
                <span>CSV</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download size={16} />
                <span>JSON</span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Import Data</div>
              <div className="text-sm text-gray-600">Upload financial data from CSV</div>
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Upload size={16} />
              <span>Import</span>
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Clear All Data</div>
              <div className="text-sm text-red-600">⚠️ This will permanently delete all your data</div>
            </div>
            <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Clear Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Add Button
const FloatingAddButton = ({ onClick }: { onClick: () => void }) => {
  const { deviceType } = useAppContext();
  
  return (
    <button
      onClick={onClick}
      className={`fixed bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40 ${
        deviceType === 'mobile' 
          ? 'bottom-4 right-4 w-12 h-12' 
          : 'bottom-6 right-6 w-14 h-14'
      }`}
    >
      <PlusCircle size={deviceType === 'mobile' ? 20 : 24} />
    </button>
  );
};

// Main App Component
const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  // Auto-detect device type based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDeviceType('desktop');
      else if (width >= 768) setDeviceType('tablet');
      else setDeviceType('mobile');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'add-transaction':
        return <AddTransaction />;
      case 'reports':
        return <Reports />;
      case 'budget':
        return <Budget />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppContext.Provider value={{ 
      state, 
      dispatch, 
      currentPage, 
      setCurrentPage, 
      deviceType, 
      setDeviceType 
    }}>
      <div className="min-h-screen bg-gray-50">
        <AppHeader />
        
        <DeviceMockup>
          <MockupHeader />
          <div className={`${
            deviceType === 'mobile' ? 'p-4' : deviceType === 'tablet' ? 'p-6' : 'p-8'
          } min-h-96`}>
            {renderPage()}
          </div>
        </DeviceMockup>

        <FloatingAddButton onClick={() => setShowAddTransaction(true)} />
        
        {showAddTransaction && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-90vh overflow-y-auto">
              <TransactionForm onClose={() => setShowAddTransaction(false)} />
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
};


}

export default Mockup

/**


 */