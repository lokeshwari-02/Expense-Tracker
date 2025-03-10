import express from 'express';
<<<<<<< HEAD
import { addTransactionController, deleteTransactionController, getAllTransactionController, updateTransactionController } from '../controllers/transactionController.js';
=======
import { 
    addTransactionController, 
    deleteTransactionController, 
    getAllTransactionController, 
    updateTransactionController, 
    deleteMultipleTransactionsController, 
    getTransactionByIdController 
} from '../controllers/transactionController.js';
>>>>>>> 77d779bde (Fixed line endings)

const router = express.Router();

router.route("/addTransaction").post(addTransactionController);

router.route("/getTransaction").post(getAllTransactionController);

router.route("/deleteTransaction/:id").post(deleteTransactionController);

router.route('/updateTransaction/:id').put(updateTransactionController);


export default router;

// New Route: Delete multiple transactions
router.route('/deleteMultipleTransactions').post(deleteMultipleTransactionsController);

// New Route: Fetch single transaction details
router.route('/getTransaction/:id').get(getTransactionByIdController);

export default router;
