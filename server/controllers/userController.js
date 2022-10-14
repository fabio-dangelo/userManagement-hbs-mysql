import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

// View All
export const view = (req, res) => {
  // User the connection
  connection.query(
    'SELECT * FROM user WHERE status = "active"',
    (err, rows) => {
      // When done with the connection, release it
      if (!err) {
        let removedUser = req.query.removed
        res.render('home', { rows, removedUser })
      } else {
        console.log(err)
      }
    }
  )
}

// Find User by Search
export const find = (req, res) => {
  let searchTerm = req.body.search
  // User the connection
  connection.query(
    'SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?',
    ['%' + searchTerm + '%', '%' + searchTerm + '%'],
    (err, rows) => {
      if (!err) {
        res.render('home', { rows })
      } else {
        console.log(err)
      }
    }
  )
}

export const form = (req, res) => {
  res.render('add-user')
}

// Add new user
export const create = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body

  // User the connection
  connection.query(
    'INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?',
    [first_name, last_name, email, phone, comments],
    (err) => {
      if (!err) {
        res.render('add-user', { alert: 'User added successfully.' })
      } else {
        console.log(err)
      }
    }
  )
}

// Edit user
export const edit = (req, res) => {
  // User the connection
  connection.query(
    'SELECT * FROM user WHERE id = ?',
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.render('edit-user', { rows })
      } else {
        console.log(err)
      }
    }
  )
}

// Update User
export const update = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body
  // User the connection
  connection.query(
    'UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?',
    [first_name, last_name, email, phone, comments, req.params.id],
    (err) => {
      if (!err) {
        // User the connection
        connection.query(
          'SELECT * FROM user WHERE id = ?',
          [req.params.id],
          (err, rows) => {
            // When done with the connection, release it
            if (!err) {
              res.render('edit-user', {
                rows,
                alert: `${first_name} has been updated.`,
              })
            } else {
              console.log(err)
            }
          }
        )
      } else {
        console.log(err)
      }
    }
  )
}

// Delete User
export const _delete = (req, res) => {
  connection.query(
    'UPDATE user SET status = ? WHERE id = ?',
    ['removed', req.params.id],
    (err) => {
      if (!err) {
        let removedUser = encodeURIComponent('User successeflly removed.')
        res.redirect('/?removed=' + removedUser)
      } else {
        console.log(err)
      }
    }
  )
}

// View User
export const viewuser = (req, res) => {
  // User the connection
  connection.query(
    'SELECT * FROM user WHERE id = ?',
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.render('view-user', { rows })
      } else {
        console.log(err)
      }
    }
  )
}
