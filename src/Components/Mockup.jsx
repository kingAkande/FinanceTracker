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

  )
}

export default Mockup