<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailPart extends Mailable
{
    use Queueable, SerializesModels;
    public $dataPart;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($dataPart)
    {
        $this->dataPart = $dataPart;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('INFORMATIONS SUR LE CLIENT')->view('partenaire.mail.mailtextpart');
    }
}
