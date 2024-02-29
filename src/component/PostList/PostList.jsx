import React from 'react';
import { Table } from 'react-bootstrap';

const PostList = ({ posts }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>
              <img src={post.image} alt={post.name} style={{ width: 100 }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PostList;