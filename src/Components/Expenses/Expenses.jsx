import React from 'react'
import './Expenses.css'
import Card from '../UI/Card.jsx'
import ExpensesFilter from '../Filter/ExpenseFilter'
import { useState } from 'react'
import { ExpenseList } from './ExpenseList'
import { ExpensesChart } from './ExpensesChart'

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear
  })

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filterInfo={filterChangeHandler}
          selected={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  )
}

export default Expenses
