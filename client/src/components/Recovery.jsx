import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile (1).png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'

import styles from '../styles/username.module.css';

export const Recovery = () => {

  return <div className="container mx-auto">

        <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recover Password!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>

          <form className='pt-10'>

              <div className="textbox flex flex-col items-center gap-6">

                <div className='input text-center'>
                  <span className='py-2 text-sm text-gray-500 text-left'>
                    Enter 6 digit OTP sent to your email address.
                  </span>
                  <input className={styles.textbox} type="password" placeholder='OTP' />
                </div>

                <button className={styles.btn} type='submit'>Sign In</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Can't get OTP? <button className='text-red-500'>Resend</button></span>
              </div>

          </form>

        </div>
      </div>
    </div>
}
