import React from 'react';
import { sendNotification, captureRecord } from './utils'; // Import utility functions for sending notifications and capturing record of the sale

function createCLTButton() {
  // Create a React component for the CLT Button
  const CLTButton = () => {
    return (
      <div>
        <button style={{color: 'red'}} onClick={handleClick}>
          Delivery Option
        </button>
        <div style={{display: 'none'}}>
          <table>
            <tr>
              <td>Name:</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Delivery Address:</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><input type="text" /></td>
            </tr>
          </table>
        </div>
      </div>
    );
  };

  // Handle the click event on the CLT Button
  const handleClick = () => {
    // Highlight the button text in red
    document.querySelector('button').style.color = 'red';

    // Show the table with the input fields
    document.querySelector('table').style.display = 'block';

    // Send a notification of the sale to the customer's email and phone number
    sendNotification({
      date: Date.now(),
      purchase: 'CLT Button',
      store: 'Wall Sneak',
      storeId: 12345,
      name: 'Delivery Option',
      deliveryAddress: document.querySelector('[name="deliveryAddress"]').value,
      customerName: document.querySelector('[name="name"]').value,
      expectedDeliveryDate: 'TODO', // TODO: Add logic for calculating expected delivery date
    });

    // Capture record of the sale
    captureRecord({
      amount: 9.99,
      stripeApiKey: 'TODO', // TODO: Add Stripe API key
      bankAccount: 'TODO', // TODO: Add bank account for depositing funds
      invoice: 'TODO', // TODO: Add logic for generating invoice
    });

    // Send branded text notifications to the customer's phone
    sendTextNotification({
      phone: document.querySelector('[name="phone"]').value,
      expectedDeliveryDate: 'TODO', // TODO: Add expected delivery date
      invoice: 'TODO', // TODO: Add invoice
      storeImage: 'TODO', // TODO: Add store image of item
    });
  };

  return <CLTButton />;
}
